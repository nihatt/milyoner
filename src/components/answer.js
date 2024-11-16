import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Answer = ({ text, isCorrect, isSelected, isHighlighted, onPress, disabled }) => {
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  useEffect(() => {
    if (isSelected) {
      setBackgroundColor('#FFD700'); // Yellow for selected answer
      const yellowTimer = setTimeout(() => {
        setBackgroundColor(isCorrect ? '#32CD32' : 'red'); // Green for correct, red for incorrect
      }, 1500);

      return () => clearTimeout(yellowTimer); // Clear timeout on unmount
    } else {
      setBackgroundColor('#fff'); // Default color
    }
  }, [isSelected, isCorrect]);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled} // Disable the button if disabled is true
      style={[
        styles.answerContainer,
        { backgroundColor, opacity: disabled ? 0.5 : 1 } // Gray out if disabled
      ]}
    >
      <Text style={styles.answerText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  answerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    width: '90%',
    alignItems: 'center',
  },
  answerText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Answer;
