// firebase/index.js
import firestore from '@react-native-firebase/firestore';


// Kullanıcı ekleme fonksiyonu
export const addUser = async (userId, userName) => {
  try {
    await firestore().collection('users').doc(userId).set({
      userName: userName,
      currentLevel: 1,
      totalWins: 0,
    });
    console.log('User added successfully!');
  } catch (error) {
    console.error('Error adding user: ', error);
  }
};

// Kullanıcı güncelleme fonksiyonu
export const updateUser = async (userId, updatedData) => {
  try {
    await firestore().collection('users').doc(userId).update(updatedData);
    console.log('User updated successfully!');
  } catch (error) {
    console.error('Error updating user: ', error);
  }
};

export const getUser = async (userId) => {
 const result = await firestore().collection('users').doc(userObject.id).get()
 if(result.exists){
  return result
 }
}

// Kullanıcı seviyesini güncelleme fonksiyonu
export const updateLevel = async (userId, newLevel) => {
  try {
    await firestore().collection('users').doc(userId).update({
      currentLevel: newLevel,
    });
    console.log('User level updated successfully!');
  } catch (error) {
    console.error('Error updating level: ', error);
  }
};
