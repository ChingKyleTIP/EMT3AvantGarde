import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const UnforeseenScreen = ({ route }) => {
  const { updateExpenses } = route.params;
  const [amount, setAmount] = useState('');

  const handleSubtract = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      updateExpenses('Unforeseen Expenses', -value);
      setAmount('');
    }
  };

  const handleAdd = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      updateExpenses('Unforeseen Expenses', value);
      setAmount('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setAmount}
        value={amount}
        placeholder="Enter your Unforeseen Expenses"
        keyboardType="numeric"
        placeholderTextColor="#aaa"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubtract}>
          <Text style={styles.buttonText}>Subtract</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Image at the bottom */}
      <Image source={require('./avant.png')} style={styles.bottomImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000', // Assuming a black background as per the image
    paddingVertical: 20,
  },
  input: {
    height: 50,
    width: '80%',
    marginVertical: 5, // Reduce vertical margin
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the buttons horizontally
    marginVertical: 5, // Reduce vertical margin
  },
  button: {
    backgroundColor: '#E94D14', // an orange color for the button background
    padding: 15,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  bottomImage: {
    width: 300, // Adjust as needed
    height: 300, // Adjust as needed
    resizeMode: 'contain',
  },
});

export default UnforeseenScreen;
