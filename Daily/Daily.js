import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';

const DailyScreen = ({ navigation }) => {
  const [dailyBudget, setDailyBudget] = useState('');
  const [savingGoal, setSavingGoal] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Your Daily Budget</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your daily budget"
        placeholderTextColor="#aaa"
        value={dailyBudget}
        onChangeText={setDailyBudget}
        keyboardType="numeric"
      />
      <Text style={styles.headerText}>Saving Goal</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your saving goal"
        placeholderTextColor="#aaa"
        value={savingGoal}
        onChangeText={setSavingGoal}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.registerButton]}
          onPress={() => navigation.navigate('Main')}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      {/* Logo in the footer */}
      <View style={styles.logoContainer}>
        <Image source={require('C:/Users/Ching/Documents/NEWEMT3/project - Copy/images/color_w_trans.png')} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '40%',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#E94D14', // Use the color that matches your design
  },
  registerButton: {
    backgroundColor: '#E94D14', // Use the color that matches your design
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoContainer: {
    position: 'absolute',
    top: 10,
    alignSelf: 'center',
  },
  logo: {
    width: 400, // Adjust the width as needed
    height: 250, // Adjust the height as needed
    resizeMode: 'contain',
  },
});

export default DailyScreen;
