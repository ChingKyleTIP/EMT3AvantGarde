import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const TranspoScreen = ({ route }) => {
  const { updateExpenses } = route.params;
  const [amount, setAmount] = useState('');

  const handleSubtract = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      updateExpenses('Auto & Transport', -value);
      setAmount('');
    }
  };

  const handleAdd = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      updateExpenses('Auto & Transport', value);
      setAmount('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setAmount}
        value={amount}
        placeholder="Enter your Auto & Transportation Expenses"
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
      <Image source={require('C:/Users/Ching/Documents/NEWEMT3/project - Copy/images/avant.png')} style={styles.bottomImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000', // Assuming a black background as per the image
  },
  input: {
    height: 50,
    width: '80%',
    marginVertical: 5, // Adjusted margin
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Centered the buttons
    width: '100%',
    marginVertical: 5, // Adjusted margin
  },
  button: {
    backgroundColor: '#E94D14', // an orange color for the button background
    padding: 15,
    borderRadius: 25,
    marginHorizontal: 5, // Adjusted to bring the buttons closer together
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

export default TranspoScreen;
