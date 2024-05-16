// Add.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const AddScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Transpo')}>
        <Text style={styles.buttonText}>Auto & Transportation</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Food')}>
        <Text style={styles.buttonText}>Food</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Unforeseen')}>
        <Text style={styles.buttonText}>Unforeseen Expenses</Text>
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Image source={require('C:/Users/Ching/Documents/NEWEMT3/project - Copy/images/avant.png')} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000', // assuming a black background as per the image
  },
  button: {
    backgroundColor: '#E94D14', // an orange color for the button background
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30, // rounded corners
    marginVertical: 10, // margin between buttons
    width: '80%', // button width
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // white text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoContainer: {
    position: 'absolute',
    bottom: 50, // adjust as needed for your layout
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200, // adjust according to your logo's aspect ratio
    height: 200, // adjust according to your logo's aspect ratio
    resizeMode: 'contain', // ensures the logo scales without distortion
  },
});

export default AddScreen;
