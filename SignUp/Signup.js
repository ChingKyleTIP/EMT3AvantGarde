import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SignUpScreen = ({ navigation }) => {
  const onPressCancel = () => {
    navigation.goBack();
  };

  const onPressNext = () => {
    navigation.navigate('Daily');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sign up</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="First Name" placeholderTextColor="#FFFFFF" />
        <TextInput style={styles.input} placeholder="Last Name" placeholderTextColor="#FFFFFF" />
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#FFFFFF" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#FFFFFF" secureTextEntry />
      </View>
      {/* Logo at the bottom */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={onPressCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={onPressNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('C:/Users/Ching/Documents/NEWEMT3/project - Copy/images/avant.png')} style={styles.logo} />
      {/* Slogan at the bottom */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20, // Add padding to the sides
    justifyContent: 'center', // Center the contents vertically
  },
  headerText: {
    fontSize: 28,
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 30,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#191818',
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    fontSize: 16,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: '#E94D14',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    flex: 1,
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: '#E94D14',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    flex: 1,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 20, // Adjust the margin as needed
  },
  sloganContainer: {
    alignSelf: 'center',
  },
  slogan: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default SignUpScreen;
