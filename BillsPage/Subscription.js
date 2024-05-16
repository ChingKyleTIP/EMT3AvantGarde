import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Subscription = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardType, setSelectedCardType] = useState(null);

  const navigateToCreditDetail = () => {
    navigation.navigate('CreditDetail');
  };

  const navigateBackToMainScreen = () => {
    navigation.navigate('Main');
  };

  const handleAddCreditCard = () => {
    setModalVisible(true);
  };

  const handleCardSelection = (card) => {
    setSelectedCard(card);
    setSelectedCardType(card.name); // Store the selected card type
    setModalVisible(false);
    // You can perform additional actions here based on the selected card
  };

  const cardTypes = [
    { id: '1', name: 'Visa' },
    { id: '2', name: 'MasterCard' },
    { id: '3', name: 'American Express' },
    // Add more card types as needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.cardItem} onPress={() => handleCardSelection(item)}>
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.creditButton} onPress={navigateToCreditDetail}>
        <View style={styles.scoreCircle}>
          <Text style={styles.creditScore}>Your Subscription Details</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailText}>Subscription Plan: Premium</Text>
          <Text style={styles.detailText}>Renewal Date: June 1, 2024</Text>
          <Text style={styles.detailText}>Payment Method: {selectedCardType || "None"}</Text>
          {/* Add Credit Card Button */}
          <TouchableOpacity style={styles.addCreditCardButton} onPress={handleAddCreditCard}>
            <Text style={styles.addCreditCardText}>Add Credit Card</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      
      {/* Modal for selecting card type */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={cardTypes}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </Modal>

      {/* Footer buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={navigateBackToMainScreen}>
          <Text style={styles.footerButtonText}>Back to Main</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  creditButton: {
    backgroundColor: '#282727',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  scoreCircle: {
    alignItems: 'center',
    marginBottom: 10,
  },
  creditScore: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
  },
  details: {
    backgroundColor: '#333333',
    padding: 10,
    borderRadius: 5,
  },
  detailText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  footerButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  footerButtonText: {
    color: 'white',
    fontSize: 16,
  },
  addCreditCardButton: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addCreditCardText: {
    color: '#000',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  cardItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cardText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default Subscription;
