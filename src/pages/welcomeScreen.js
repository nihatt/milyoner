import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, Modal, Button, Image, Dimensions, ActivityIndicator, TouchableOpacity, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import { BannerAd, BannerAdSize, TestIds, useForeground } from 'react-native-google-mobile-ads';
import { useFocusEffect } from '@react-navigation/native';
import { PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import LinearGradient from 'react-native-linear-gradient';

// Ekran boyutlarını al
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const welcomeBannerId = __DEV__ ? TestIds.ADAPTIVE_BANNER : (Platform.OS == 'ios' ? 'ca-app-pub-9926931663630273/8902399901' : 'ca-app-pub-9926931663630273/3981908422');
const WelcomeScreen = ({ navigation }) => {
  const bannerRef = useRef(null);
  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  })
  const [userModal, setUserModal] = useState(false);
  const [userName, setuserName] = useState('');
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const [level, setLevel] = useState(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const [userId, setUserId] = useState(null);
  const [bannerLoading, setBannerLoading] = useState(true)
  const [id, setId] = useState("")


  const fetchUser = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        const userObject = JSON.parse(storedUser);
        const userDoc = await firestore().collection('users').doc(userObject.id).get();
        if (userDoc.exists) {
          setId(userObject.id)
          const userData = userDoc.data();
          setuserName(userData.userName);
          setLevel(userData.totalWins);
          setUserId(userObject.id);
          setIsUserLoaded(true);
        }
      } else {
        setUserModal(true);
      }
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    } finally {
      console.log("finally içi")
      setLoading(false); // Yüklenme işlemi tamamlandı
    }
  };
  const requestUserPermission = async () => {
    if (Platform.OS === 'ios') {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
        getFcmToken();
      } else {
        console.log('Permission denied');
      }
    } else if (Platform.OS === 'android') {
      if (Platform.Version >= 33) {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Notification permission granted');
            getFcmToken();
          } else {
            console.log('Notification permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
      } else {
        // Android 12 ve daha düşük sürümler
        getFcmToken();
      }
    }
  };

  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log('FCM Token:', fcmToken);
      // Token’i backend’e kaydedin veya push notification işlemlerinde kullanın
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchUser();
    }, [])
  );

  useEffect(() => {
    requestUserPermission()
  }, [])

  const saveUser = async () => {
    if (!userName) {
      return;
    }
    setSaving(true);
    try {
      const userDoc = await firestore().collection('users').add({
        userName: userName,
        totalWins: 0,
        adsWatched: 0,
        joker50: 0,
        jokerSecond: 0,
        jokerPeople: 0
      });
      const userObject = { id: userDoc.id, userName, totalWins: 0, adsWatched: 0, joker50: 0, jokerSecond: 0, jokerPeople: 0 };
      await AsyncStorage.setItem('user', JSON.stringify(userObject));
      setUserId(userDoc.id);
      setLevel(0);
      setUserModal(false);
    } catch (error) {
      console.log('Error saving user:', error);
    } finally {
      fetchUser()
      setSaving(false);
    }
  };

  if (loading) {
    // Yüklenme göstergesi
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6A1B9A" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/bg2.jpg')}
        style={styles.backgroundImage}
      />

      {isUserLoaded && !bannerLoading ? (
        <View style={styles.content}>
          <View style={{ alignSelf: 'center' }}>
            <Image source={require('../assets/images/banner.png')} style={styles.bannerImage} />
            <Image source={require('../assets/images/banner2.png')} style={styles.bannerImage} />
          </View>
          <Text style={styles.welcomeText}>Hoş Geldin, {userName}!</Text>
          <Text style={styles.levelText}>Kazanılan: {level}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Game", { user: id })}>
              <Icon name="play-circle" size={30} color="#fff" />
              <Text style={styles.buttonText}>Oyuna Başla</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LeaderBoard")}>
              <Icon name="trophy-outline" size={30} color="#fff" />
              <Text style={styles.buttonText}>Lider Tablosu</Text>
            </TouchableOpacity>
          </View>



        </View>
      ) : <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6A1B9A" />
      </View>}

      <View style={styles.bannerContainer}>
        <BannerAd onAdLoaded={() => setBannerLoading(false)} ref={bannerRef} unitId={welcomeBannerId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
      </View>


      <Modal visible={userModal} transparent={true} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalWrapper}>
          <LinearGradient
            colors={['#f8f9fa', '#e0e0e0']}
            style={styles.gradientBackground}
          >
            <View style={styles.card}>
              <Icon name="person-circle-outline" size={60} color="#6A1B9A" />
              <Text style={styles.title}>Kullanıcı Adınızı Girin</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Kullanıcı Adı"
                placeholderTextColor="#999"
                value={userName}
                onChangeText={setuserName}
              />
              {saving ? (
                <ActivityIndicator size="large" color="#6A1B9A" />
              ) : (
                <Button title="Yarışma Başlasın !" color="#6A1B9A" onPress={saveUser} />
              )}
            </View>
          </LinearGradient>
        </View>
      </View>
    </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: screenWidth,
    height: screenHeight,
    position: 'absolute',
  },
  bannerContainer: {
    alignItems: 'center',

  },
  bannerImage: {
    width: screenWidth,
    height: screenHeight * 0.10,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
    color: '#4A148C',
    fontWeight: 'bold',
    marginTop: 20,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Yarı saydam arka plan
  },
  modalWrapper: {
    width: '90%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  gradientBackground: {
    borderRadius: 15,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 5, // Android gölgelendirme
    shadowColor: '#000', // iOS gölgelendirme
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6A1B9A',
    marginVertical: 10,
    textAlign: 'center',
  },
  inputField: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
    textAlign: Platform.OS === 'ios' ? 'left' : 'left',
  },
  levelText: {
    fontSize: 18,
    color: '#4A148C',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6A1B9A',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: 250,
    marginBottom: 20,
    borderRadius: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
