import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

export default function LoginScreen() {
  const [inputIdentifier, setInputIdentifier] = useState(''); // Holds email or username
  const [method, setMethod] = useState('otp'); // 'otp' or 'password'
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Custom message instead of alert

  const handleLogin = () => {
    setMessage(''); // Clear previous messages
    if (!inputIdentifier) {
      setMessage("Please enter your email or username.");
      return;
    }

    if (method === 'otp') {
      // In a real app, this would trigger an API call to send the OTP
      setMessage(`OTP initiated for: ${inputIdentifier}.`);
      // TODO: Navigate to OTP verification screen after successful OTP request
    } else {
      // In a real app, this would trigger an API call to verify username/email and password
      if (!password) {
        setMessage("Please enter your password.");
        return;
      }
      setMessage(`Attempting password login for: ${inputIdentifier}.`);
      // TODO: Handle successful login and navigate to the main app dashboard
    }
    
    // Clear the password field after attempting login
    setPassword('');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.flexOne}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Login to Nutribowl</Text>

          {/* Email or Username Input */}
          <TextInput
            style={styles.input}
            placeholder="Email or Username"
            placeholderTextColor="#999"
            value={inputIdentifier}
            onChangeText={setInputIdentifier}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* OTP / Password Toggle */}
          <View style={styles.methodContainer}>
            <TouchableOpacity 
              style={[styles.methodButton, method === 'otp' && styles.activeMethod]}
              onPress={() => setMethod('otp')}
            >
              <Text style={[styles.methodText, method === 'otp' && styles.activeMethodText]}>Login via OTP</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.methodButton, method === 'password' && styles.activeMethod]}
              onPress={() => setMethod('password')}
            >
              <Text style={[styles.methodText, method === 'password' && styles.activeMethodText]}>Login via Password</Text>
            </TouchableOpacity>
          </View>

          {/* Password Input (Conditionally rendered) */}
          {method === 'password' && (
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          )}

          {/* Dynamic Message Display */}
          {message ? (
            <Text style={styles.messageText}>{message}</Text>
          ) : null}

          {/* Login Button */}
          <TouchableOpacity 
            style={styles.loginButton} 
            onPress={handleLogin}
          >
            <Text style={styles.loginText}>
              {method === 'otp' ? 'Send OTP' : 'Log In'}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f5f5f5' },
  flexOne: { flex: 1 },
  scrollContainer: { 
    flexGrow: 1,
    padding: 30, 
    justifyContent: 'center', 
  },
  title: { 
    fontSize: 32, 
    fontWeight: '800', 
    marginBottom: 40, 
    textAlign: 'center', 
    color: '#333' 
  },
  input: { 
    backgroundColor: '#fff',
    borderWidth: 1, 
    borderColor: '#ddd', 
    borderRadius: 12, 
    padding: 16, 
    marginVertical: 10,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  methodContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginVertical: 30,
    backgroundColor: '#e8e8e8',
    borderRadius: 15,
    padding: 5,
  },
  methodButton: { 
    flex: 1,
    padding: 15, 
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 2,
    transitionDuration: 300,
  },
  activeMethod: { 
    backgroundColor: '#4CAF50', // Selected method background
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  methodText: { 
    color: '#333', 
    fontWeight: '600',
    fontSize: 15,
  },
  activeMethodText: {
    color: '#fff', // Selected method text color
  },
  loginButton: { 
    backgroundColor: '#4CAF50', 
    padding: 18, 
    borderRadius: 12, 
    alignItems: 'center',
    marginTop: 40,
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  loginText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: '800' 
  },
  messageText: {
    marginTop: 20,
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  }
});
