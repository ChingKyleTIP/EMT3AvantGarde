import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ImageBackground, Dimensions } from 'react-native';

// Get the dimensions of the device to help with styling
const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  // This function should only navigate to Main
  const onPressLogin = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./images/avant.png')} 
      style={styles.backgroundImage}
      >
        {/* Additional content or layers can be added here */}
        <ImageBackground source={require('./images/pentagon1.png')} 
        style={styles.overlayImage}>
          {/* If you need to overlay more images or content, consider using Views with absolute positioning inside this ImageBackground */}
        </ImageBackground>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Username"
            placeholderTextColor="#aaa"
          />
          <Text style={styles.labelText}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Password"
            placeholderTextColor="#aaa"
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={onPressLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282727',
  },
  backgroundImage: {
    postition: 'absolute',
    bottom: 0,
    width: 378,
    height: 180,
    resizeMode: 'contain',
    zIndex: 1,
    alignItems: 'center',
  },
  overlayImage: {
    width: 243,
    height: 276,
    resizeMode: 'contain',
    right: 90,
    top: -250,
    //position: 'absolute',
    //width: '100%', // Adjust as necessary
    //height: '100%', // Adjust as necessary
    // Additional styling for overlaying images
  },
  overlayImage2: {
    position: 'absolute',
    width: '50%', // Adjust as necessary
    height: '50%', // Adjust as necessary
    // Additional styling for overlaying images
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
  },
  labelText: {
    alignSelf: 'flex-start',
    color: '#fff',
    paddingVertical: 5,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#191818',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    fontSize: 16,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  },
  loginButton: {
    backgroundColor: '#E94D14',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
