import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';

const ShimmerText = ({ children }) => {
  const shimmerAnim = useRef(new Animated.Value(-1)).current;
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 2,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  }, [shimmerAnim]);

  const translateX = shimmerAnim.interpolate({
    inputRange: [-1, 1, 2],
    outputRange: [-screenWidth, 0, screenWidth],
  });

  return (
    <View style={styles.shimmerContainer}>
      <Text style={styles.text}>{children}</Text>
      <Animated.View
        style={[
          styles.shimmerOverlay,
          {
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shimmerContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF4500',
    textShadowColor: 'rgba(0, 0, 0, 0.3)', // Gölge rengi
    textShadowOffset: { width: 2, height: 2 }, // Gölge ofseti
    textShadowRadius: 3, // Gölge bulanıklığı
  },
  shimmerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '50%',
    height: '100%',
    opacity: 0.5,
  },
});

export default ShimmerText;
