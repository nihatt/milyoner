import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // İkon için kütüphane

const MegaButton = ({adReady,text,icon,onPress,enabled}) => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity onPress={enabled&&adReady ? onPress : null} style={styles.buttonContainer}>
        <View style={[styles.button,{backgroundColor: enabled ? 'rgba(220, 208, 255, 0.3)' : 'gray'}]}>
          <Text style={[styles.buttonText,{color:enabled ? 'purple' : 'white'}]}>{text}</Text>
        </View>
        <View style={styles.iconContainer}>
          {adReady ?<Icon name={icon} size={26} color={enabled ? "purple" : 'gray'} /> : <ActivityIndicator size={"small"}></ActivityIndicator>}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    width: 120, // Her butona sabit genişlik veriyoruz

  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems:'center',
    padding: 3,
    borderRadius: 30,
    justifyContent: 'center',
  },
  button: {
    flex:1,
     // RGBA değeri çift tırnak içinde olmalı
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 10, // İçerideki boşlukları ayarladık
    flexDirection: 'row',
    alignItems: 'center',

  },
  buttonText: {

    fontWeight: 'bold',
    fontSize: 16,
  },
  iconContainer: {
    backgroundColor: '#fff',
    width: 30, // Dışarıdaki beyaz kısmın genişliği
    height: 30, // Yükseklik de orantılı
    borderRadius: 15, // Yarıçapı da küçültüldü
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0, // Pozisyonu da ayarlandı
  },
});

export default MegaButton;
