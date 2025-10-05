import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
// LottieView dependency is required for animations
import LottieView from 'lottie-react-native';

export default function IntroScreen({ navigation }) {
  useEffect(() => {
    // Automatically navigate to the Login screen after 3 seconds
    const timer = setTimeout(() => {
      // replace ensures the user cannot go back to the intro screen
      navigation.replace('Login');
    }, 3000); 

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  // If the user wants to skip the timer, they can tap the screen (optional)
  const handlePress = () => {
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity style={styles.container} onPress={handlePress} activeOpacity={0.9}>
        <LottieView
          // NOTE: Ensure your Lottie JSON file is located at ./assets/nutrition.json
          source={require('../assets/nutrition.json')} 
          autoPlay
          loop
          style={styles.animation}
        />
        <Text style={styles.title}>Welcome to Nutribowl</Text>
        <Text style={styles.subtitle}>Tap to skip...</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff',
    padding: 20,
  },
  animation: { 
    width: '80%', 
    maxWidth: 300, 
    height: 300 
  },
  title: { 
    fontSize: 32, 
    fontWeight: '700', 
    marginTop: 20,
    color: '#4CAF50', // Primary Green
  },
  subtitle: {
    fontSize: 14,
    marginTop: 50,
    color: '#999',
  }
});
