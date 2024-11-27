import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Modal, Button, Image, ActivityIndicator, Platform, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native'; // Modern buton için
import AsyncStorage from '@react-native-async-storage/async-storage';
import Question from '../components/question';
import Answer from '../components/answer';
import questionsData from '../data/questionsData';
import MegaButton from '../components/button';
import { AdEventType, BannerAd, BannerAdSize, InterstitialAd, RewardedAd, RewardedAdEventType, TestIds, useForeground, useRewardedAd } from 'react-native-google-mobile-ads';
import { useDispatch, useSelector } from 'react-redux';
import { setAdLoading } from '../redux/reducers/adReducer';
import { PieChart } from 'react-native-svg-charts';
import { Text as SvgText } from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ShimmerText from '../components/shimmerText';
import firestore from '@react-native-firebase/firestore';
// Ekran boyutlarını al
const { height: screenHeight } = Dimensions.get('window');
const gameBannerIdIos =  (Platform.OS == "ios" ? 'ca-app-pub-9926931663630273/8488129646' : 'ca-app-pub-9926931663630273/7415704637');
const gameSwipeIdIos = (Platform.OS == "ios" ? 'ca-app-pub-9926931663630273/1735491793' : 'ca-app-pub-9926931663630273/6102622967');
const gameJokerIdIos = (Platform.OS == "ios" ? 'ca-app-pub-9926931663630273/7704896551' : 'ca-app-pub-9926931663630273/1317028702');
const GameScreen = ({ navigation, route }) => {
  const bannerRef = useRef(null);
  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  });
  const id = route?.params?.user
  const dispatch = useDispatch();
  const isIosTestFlight = useSelector(s => s.testflight.testFlightMode);
  const bannerLoading = isIosTestFlight ? false : useSelector((state) => state.advertisement.bannerLoading);

  const interstitial = useRef(
    InterstitialAd.createForAdRequest(gameSwipeIdIos, {
      keywords: ['fashion', 'clothing'],
    })
  ).current;

  const rewarded = RewardedAd.createForAdRequest(gameJokerIdIos, {
    keywords: ['fashion', 'clothing'],
  });
  const [loadedJoker, setLoadedJoker] = useState(false);
  const [loaded, setLoaded] = useState(isIosTestFlight);
  const [isWinModalVisible, setIsWinModalVisible] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [viewVisible, setViewVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false); // Süreyi kontrol eden state
  const [questions, setQuestions] = useState([]);
  const [clicked, setClicked] = useState("")
  const [isFirstActive, setIsFirstActive] = useState(true)
  const [isSecondActive, setIsSecondActive] = useState(true)
  const [isThirdActive, setIsThirdActive] = useState(true)
  const [disabledOptions, setDisabledOptions] = useState([]);
  const [secondRight, setSecondRight] = useState(false);
  const [jokerCount, setJokerCount] = useState(3)
  const [questionData, setQuestionData] = useState([])
  const { isLoaded:adIsLoaded, isClosed, load:loadRewardAds, show: showRewarded, isEarnedReward, isShowing, isOpened } = useRewardedAd(gameJokerIdIos);

  useEffect(() => {
    // Load interstitial ad and set up event listeners
    const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });



    const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      setLoaded(false);
      setIsPaused(false); // Reklam kapandığında süreyi tekrar başlat
      interstitial.load(); // Load a new ad when the previous one is closed
    });

    interstitial.load(); // Start loading the interstitial ad

    return () => {
      unsubscribeLoaded();
      unsubscribeClosed();
    };
  }, []);
  useEffect(() => {
    console.log("reklam hazır", adIsLoaded)
}, [adIsLoaded]);



  useEffect(() => {
    console.log("yüklemeye girdi")
    if (!adIsLoaded) {
      console.log("yüklemeye girdi2")
      console.log(adIsLoaded)
      loadRewardAds();
    }
  }, [adIsLoaded, loadRewardAds]);


  useEffect(() => {
    if (isClosed) {
      applyJokerEffect()
      setIsPaused(false);
    }
  }, [isClosed]);
  useEffect(() => {
    if (questions.length > 0) {

      const options = questions[currentQuestionIndex]?.options;
      if (options) {
        setQuestionData(questions[currentQuestionIndex])
        setShuffledOptions(shuffle([...options]));
      }
    }
  }, [questions, currentQuestionIndex]);
  const applyJokerEffect = async (param) => {
    console.log("gleenzi", param)
    console.log("clicked joker içi", clicked)
    if (clicked === "%50" || param === "%50") {
      await firestore().collection('users').doc(id).update({
        adsWatched: firestore.FieldValue.increment(1),
        joker50: firestore.FieldValue.increment(1),
      });
      setJokerCount(jokerCount - 1)
      // Find all incorrect options
      setIsFirstActive(false)
      const wrongOptions = shuffledOptions
        .map((option, index) => (!option.isCorrect ? index : null))
        .filter((index) => index !== null);

      // Randomly select 2 wrong options to disable
      const optionsToDisable = wrongOptions.sort(() => 0.5 - Math.random()).slice(0, 2);
      setDisabledOptions(optionsToDisable);
    }
    else if (clicked == "people" || param == "people") {
      await firestore().collection('users').doc(id).update({
        adsWatched: firestore.FieldValue.increment(1),
        jokerPeople: firestore.FieldValue.increment(1),
      });
      setJokerCount(jokerCount - 1)
      setIsSecondActive(false)
      setViewVisible(true);
    }
    else if (clicked === "second" || param == "second") {
      await firestore().collection('users').doc(id).update({
        adsWatched: firestore.FieldValue.increment(1),
        jokerSecond: firestore.FieldValue.increment(1),
      });
      setJokerCount(jokerCount - 1)
      setIsThirdActive(false)
      setSecondRight(true)
    }
    setClicked("");
  };


  useEffect(() => {
    const loadShownIndexes = async () => {
      try {
        const storedIndexes = await AsyncStorage.getItem('shownIndexes');
        const parsedIndexes = storedIndexes ? JSON.parse(storedIndexes) : [];
        const filteredQuestions = questionsData.filter(
          (question) => !parsedIndexes.includes(question.index)
        );
        const shuffledQuestions = filteredQuestions.sort(() => 0.5 - Math.random());
        const selectedQuestions = shuffledQuestions.slice(0, 12);

        setQuestions(selectedQuestions);
        setQuestionData(selectedQuestions[currentQuestionIndex])
      } catch (error) {
        console.error("AsyncStorage'dan veriler yüklenemedi:", error);
      }
    };

    loadShownIndexes();
  }, []);
  const correctOptionIndex = shuffledOptions?.findIndex(option => option.isCorrect);
  const optionLabels = ['A', 'B', 'C', 'D'];

  const handleCongratulationsPress = async () => {
    try {
      await firestore().collection('users').doc(id).update({
        totalWins: firestore.FieldValue.increment(1), // `totalWins` alanını 1 arttır
      });
      setIsWinModalVisible(false); // Modalı kapat
      navigation.navigate("Welcome"); // Ana ekrana geri dön veya istediğiniz başka bir işlem
    } catch (error) {
      console.error("Firebase güncelleme hatası:", error);
    }
  };


  const handleOptionPress = async (index) => {
    setSelectedOption(index);
    const isCorrect = shuffledOptions[index].isCorrect;

    if (isCorrect) {
      if (secondRight) {
        setSecondRight(false);
      }
      setCorrectAnswerCount((prevCount) => prevCount + 1);

      setTimeout(async () => {
        const questionIndex = questions[currentQuestionIndex].index;
        try {
          const storedIndexes = await AsyncStorage.getItem('shownIndexes');
          const shownIndexes = storedIndexes ? JSON.parse(storedIndexes) : [];

          if (!shownIndexes.includes(questionIndex)) {
            shownIndexes.push(questionIndex);
            await AsyncStorage.setItem('shownIndexes', JSON.stringify(shownIndexes));
          }
        } catch (error) {
          console.error("AsyncStorage'a kaydedilemedi:", error);
        }

        // 12. soruya doğru cevap verildiyse kazanan modalını göster
        if (currentQuestionIndex === 11) {
          setIsWinModalVisible(true); // Kazanan modalını göster
        } else if (correctAnswerCount + 1 === 2 && loaded) {
          setCorrectAnswerCount(0); // Reset the correct answer count
          setIsPaused(true); // Süreyi durdur
          isIosTestFlight ? null : interstitial.show(); // Reklamı göster
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsModalVisible(true);
        }

        setDisabledOptions([]);
        setSelectedOption(null);
        setTimerKey((prevKey) => prevKey + 1);
      }, 3000);
    } else {
      if (secondRight) {
        setSecondRight(false);
      } else {
        
        console.log("Yanlış cevap!");
        setTimeout(() => {
          dispatch(setAdLoading(true));
          setIsModalVisible(true);
        }, 3000);
        
      }
    }
  };


  const handleTimerEnd = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    navigation.goBack();
    setIsModalVisible(false);

  };





  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const data = shuffledOptions?.map((option, index) => ({
    key: index,
    value: index === correctOptionIndex ? 50 : Math.random() * 20 + 10, // Doğru şık %50, diğerleri rastgele düşük oran
    svg: { fill: index === correctOptionIndex ? '#6A1B9A' : '#cfcfcf' }, // Doğru şık mor, diğerleri gri
    label: `${optionLabels[index]}: ${Math.round(index === correctOptionIndex ? 50 : Math.random() * 20 + 10)}%`, // Harf ve yüzde bilgisi
  }));
  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { pieCentroid, data } = slice;
      return (
        <SvgText
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="#000"
          fontSize="14"
          fontWeight="bold"
          textAnchor="middle"
        >
          {data.label}
        </SvgText>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {bannerLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )}
      <View style={styles.topBackground}>
        <Image style={{ width: '100%', height: 250 }} source={require('../assets/images/bg.png')} />
        <View style={styles.header}>
          <Text style={styles.backButton}>{'<'}</Text>
          <Text style={styles.settingsButton}>{'='}</Text>
        </View>
      </View>
      <View style={{ height: screenHeight * 0.40, justifyContent: 'center', alignItems: 'center', marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0 }}>
        {questionData && (
          <Question
            count={jokerCount}
            key={timerKey}
            duration={25}
            onEnd={handleTimerEnd}
            isPaused={bannerLoading || isPaused} // Süre kontrolü için isPaused prop'u ekle
            index={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            questionText={questionData.question}
          />
        )}
      </View>
      <View style={[styles.jokerButtonContainer, { height: screenHeight * 0.1, }]}>
        <View style={{ flexDirection: 'row' }}>
          <MegaButton adReady={adIsLoaded} enabled={isFirstActive} icon={"star-half"} text="%50"
            onPress={() => {
              if (!isIosTestFlight) {
                setIsPaused(true);
                setClicked("%50");
                showRewarded();
              } else {
                setClicked("%50");
                applyJokerEffect("%50")
              }
            }}
          />
          <MegaButton adReady={adIsLoaded} enabled={isSecondActive} icon={"people-circle"} text="Seyirci"
            onPress={() => {
              if (!isIosTestFlight) {
                setIsPaused(true);
                setClicked("people");
                showRewarded();
              } else {
                setClicked("people");
                applyJokerEffect("people")
              }
            }}
          />
          <MegaButton adReady={adIsLoaded} enabled={isThirdActive} icon={"repeat"} text="2. Cevap" onPress={() => {
            if (!isIosTestFlight) {
              setIsPaused(true);
              setClicked("second");
              showRewarded();
            } else {
              setClicked("second");
              applyJokerEffect("second")
            }
          }}
          />
        </View>
        {secondRight && (
          <ShimmerText>x2 Aktif!</ShimmerText>
        )}
      </View>
      <View style={[styles.answersContainer, { height: screenHeight * 0.55, alignContent: 'flex-start', justifyContent: 'flex-start' }]}>

        {questionData &&
          shuffledOptions.map((option, index) => (
            <Answer
              key={index}
              text={option.text}
              isCorrect={option.isCorrect}
              isSelected={selectedOption === index}
              isHighlighted={selectedOption === index && option.isCorrect}
              onPress={() => handleOptionPress(index)}
              disabled={disabledOptions.includes(index)} // Pass disabled prop
            />
          ))}
      </View>
      {!isIosTestFlight && <View style={styles.adContainer}>
        <BannerAd
          onAdLoaded={() => isIosTestFlight ? null : dispatch(setAdLoading(false))}
          ref={bannerRef}
          unitId={gameBannerIdIos}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        />
      </View>}
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Ionicons name="alert-circle-outline" size={40} color="#FF5252" style={styles.icon} />
            <Text style={styles.modalText}>Oyun Bitti!</Text>
            <Text style={styles.modalSubText}>Şansını tekrar dene</Text>
            <TouchableOpacity style={styles.retryButton} onPress={closeModal}>
              <Ionicons name="refresh" size={20} color="#FFF" />
              <Text style={styles.retryButtonText}>Çıkış Yap</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal visible={isWinModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Ionicons name="trophy" size={50} color="#FF5252" style={styles.icon} />
            <Text style={styles.winText}>Yarışmayı Kazandınız!</Text>
            <Text style={styles.congratulationsText}>Tebrikler! Harika bir başarı gösterdiniz.</Text>
            <TouchableOpacity style={styles.congratulationsButton} onPress={handleCongratulationsPress}>
              <Text style={styles.congratulationsButtonText}>Tebrikler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal visible={viewVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Seyirci Jokeri</Text>
            <PieChart style={{ height: 250, width: 250 }} data={data ? data : []}>
              <Labels slices={data} />
            </PieChart>
            <TouchableOpacity style={styles.closeButton} onPress={() => setViewVisible(false)}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  topBackground: {
    backgroundColor: '#6A1B9A',
    height: screenHeight * 0.3, // Ekran yüksekliğine göre orantılı yükseklik
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    fontSize: 24,
    color: '#fff',
  },
  settingsButton: {
    fontSize: 24,
    color: '#fff',
  },
  answersContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jokerButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  adContainer: {
    height: screenHeight * 0.1,
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Daha koyu arka plan
  },
  winText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A148C',
    marginTop: 10,
  },
  congratulationsText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
  congratulationsButton: {
    backgroundColor: '#6A1B9A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  congratulationsButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30, // Daha geniş padding
    borderRadius: 15, // Daha yuvarlak köşeler
    width: '85%', // Modalın genişliğini artır
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#E0E0E0',
    borderRadius: 15,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 15,
  },
  modalText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  modalSubText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF5252',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  retryButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8, // İkon ve metin arasında boşluk
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default GameScreen;
