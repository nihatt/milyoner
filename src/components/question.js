// src/components/Question.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const Question = ({ count, isPaused, questionText, index, totalQuestions, onEnd, duration }) => {
  return (
    <View style={styles.container}>
      {/* Timer */}
      <View style={styles.timerWrapper}>
        {/* Yarı saydam arka plan */}
        <View style={styles.timerBackground} />
        <CountdownCircleTimer
          strokeLinecap="round"
          isPlaying={!isPaused}
          duration={duration}
          colors={['#32CD32', '#FF8C00', '#FF4500']}
          colorsTime={[12, 6, 0]}
          strokeWidth={8}
          size={80}
          onComplete={onEnd}
        >
          {({ remainingTime }) => (
            <Text style={styles.timerText}>{remainingTime}</Text>
          )}
        </CountdownCircleTimer>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.scoreTextGreen}>Kalan Joker</Text>
        <Text style={styles.scoreTextRed}>{count}</Text>
      </View>

      {/* Question Section */}
      <View style={styles.questionSection}>
        <Text style={styles.questionNumber}>Soru {index}/{totalQuestions}</Text>
        <ScrollView
          style={styles.questionTextContainer}
          contentContainerStyle={styles.questionTextContent}
          showsVerticalScrollIndicator={false} // Dikey kaydırma çubuğunu gizler
        >
          <Text style={styles.questionText}>{questionText}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    position: 'relative',
  },
  timerWrapper: {
    position: 'absolute',
    top: -40,
    alignSelf: 'center',
  },
  timerBackground: {
    position: 'absolute',
    width: 80, // Sayaçla aynı boyut
    height: 80, // Sayaçla aynı boyut
    borderRadius: 40, // Yarıçapı, daire şekli vermek için
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Yarı saydam beyaz
  },
  timerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  questionSection: {
    width: '100%',
    alignItems: 'center',
  },
  questionNumber: {
    fontSize: 16,
    color: '#6A1B9A',
    marginBottom: 10,
  },
  questionTextContainer: {
    maxHeight: 90, // Soru metninin maksimum yüksekliğini belirler
    width: '100%', // Genişliği kapsayıcı genişliğine göre ayarlar
  },
  questionTextContent: {
    flexGrow: 1, // İçeriğin kaydırılabilir olmasını sağlar
  },
  questionText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
  scoreTextGreen: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34A853',
  },
  scoreTextRed: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EA4335',
  },
});

export default Question;
