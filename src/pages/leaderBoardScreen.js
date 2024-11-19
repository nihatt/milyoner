// src/pages/LeaderBoardScreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';

const LeaderBoardScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const state = useSelector(s => s.testflight);

  useEffect(() => {
    console.log("lider",state)
    const fetchData = async () => {
      try {
        const querySnapshot = await firestore()
          .collection('users')
          .orderBy('totalWins', 'desc')
          .limit(10)
          .get();
        const usersList = querySnapshot.docs.map(doc => doc.data());
        setUsers(usersList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching leaderboard data: ', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <ImageBackground
      source={require('../assets/images/bg3.jpg')}
      style={styles.background}
    >  
        <ActivityIndicator size="large" color="#0000ff" />
      </ImageBackground>
    );
  }

  const renderItem = ({ item, index }) => {
    let medalColor;
    switch (index) {
      case 0:
        medalColor = '#FFD700'; // Altın
        break;
      case 1:
        medalColor = '#C0C0C0'; // Gümüş
        break;
      case 2:
        medalColor = '#CD7F32'; // Bronz
        break;
      default:
        medalColor = '#000000'; // Diğer kullanıcılar için siyah
    }

    return (
      <View
        style={[
          styles.userContainer,
          index < 3 && styles.highlightUserContainer,
        ]}
      >
        {index < 3 && (
          <Icon
            name={index === 0 ? 'trophy' : index === 1 ? 'medal' : 'star'}
            size={24}
            color={medalColor}
            style={styles.icon}
          />
        )}
        <Text style={[styles.userName, { color: medalColor }]}>
          {item.userName}
        </Text>
        <Text style={styles.totalWins}>{item.totalWins} Zafer</Text>
      </View>
    );
  };

  return (
    <ImageBackground
      source={require('../assets/images/bg3.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={28} color="#fff" />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Icon name="trophy" size={28} color="#FFD700" />
              <Text style={styles.title}>Liderlik Tablosu</Text>
              <Icon name="trophy" size={28} color="#FFD700" />
            </View>
          </View>
          <FlatList
            data={users}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Siyah ve yarı saydam gölgelendirme
  },
  container: {
    flex: 1,
    padding: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginHorizontal: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  highlightUserContainer: {
    backgroundColor: '#fff9e6',
    borderRadius: 10,
    marginVertical: 5,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
  },
  totalWins: {
    fontSize: 16,
    color: '#555',
  },
});

export default LeaderBoardScreen;
