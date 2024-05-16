import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Modal, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon set

const Settings = () => {
  const navigation = useNavigation();
  const userEmail = 'qkjpching@tip.edu.ph';
  const profilePictureUri = require('./Ching.jpg');

  const [changeEmailModalVisible, setChangeEmailModalVisible] = useState(false);
  const [changePasswordModalVisible, setChangePasswordModalVisible] = useState(false);
  const [connectedAccountsModalVisible, setConnectedAccountsModalVisible] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [notificationEnabled, setNotificationEnabled] = useState(false);

  const navigateToCreditDetail = () => {
    navigation.navigate('CreditDetail');
  };

  const navigateBackToMainScreen = () => {
    navigation.navigate('Main');
  };

  const toggleChangeEmailModal = () => {
    setChangeEmailModalVisible(!changeEmailModalVisible);
  };

  const toggleChangePasswordModal = () => {
    setChangePasswordModalVisible(!changePasswordModalVisible);
  };

  const toggleConnectedAccountsModal = () => {
    setConnectedAccountsModalVisible(!connectedAccountsModalVisible);
  };

  const handleEmailChange = (text) => {
    setNewEmail(text);
  };

  const handlePasswordChange = (text) => {
    setNewPassword(text);
  };

  const toggleNotification = () => {
    setNotificationEnabled(!notificationEnabled);
  };

  const navigateToAllowApps = () => {
    // Implement navigation to Allow Apps screen or modal
    console.log("Navigate to Allow Apps");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Image source={profilePictureUri} style={styles.profileImage} />
        <Text style={styles.userName}>Kyle Ching</Text>
        <Text style={styles.userEmail}>{userEmail}</Text>
      </View>
      <TouchableOpacity style={styles.creditButton} onPress={navigateToCreditDetail}>
        <View style={styles.details}>
          <Text style={styles.sectionTitle}>Notification Settings</Text>
          <TouchableOpacity style={styles.settingOption} onPress={toggleNotification}>
            <Icon name={notificationEnabled ? "bell" : "bell-slash"} size={20} color="#FFFFFF" />
            <Text style={styles.settingOptionText}>
              {notificationEnabled ? "Notifications Enabled" : "Notifications Disabled"}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.creditButton} onPress={toggleChangeEmailModal}>
        <View style={styles.details}>
          <Text style={styles.sectionTitle}>Account Settings</Text>
          <TouchableOpacity style={styles.settingOption} onPress={toggleChangeEmailModal}>
            <Icon name="envelope" size={20} color="#FFFFFF" />
            <Text style={styles.settingOptionText}>Change email address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingOption} onPress={toggleChangePasswordModal}>
            <Icon name="lock" size={20} color="#FFFFFF" />
            <Text style={styles.settingOptionText}>Change password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingOption} onPress={toggleConnectedAccountsModal}>
            <Icon name="tag" size={20} color="#FFFFFF" />
            <Text style={styles.settingOptionText}>Manage connected accounts</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {/* Change Email Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={changeEmailModalVisible}
        onRequestClose={toggleChangeEmailModal}
      >
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter new email:</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleEmailChange}
              value={newEmail}
              placeholder="New Email"
              keyboardType="email-address"
            />
            <Button title="Save" onPress={toggleChangeEmailModal} />
          </ScrollView>
        </View>
      </Modal>
      {/* Change Password Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={changePasswordModalVisible}
        onRequestClose={toggleChangePasswordModal}
      >
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter new password:</Text>
            <TextInput
              style={styles.input}
              onChangeText={handlePasswordChange}
              value={newPassword}
              placeholder="New Password"
              secureTextEntry={true}
            />
            <Button title="Save" onPress={toggleChangePasswordModal} />
          </ScrollView>
        </View>
      </Modal>
      {/* Connected Accounts Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={connectedAccountsModalVisible}
        onRequestClose={toggleConnectedAccountsModal}
      >
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text style={styles.modalTitle}>Connected Accounts:</Text>
            {/* Add icons for connected accounts */}
            <View style={styles.connectedAccounts}>
              <TouchableOpacity style={styles.connectedAccountOption} onPress={() => console.log('Gmail')}>
                <Icon name="envelope" size={20} color="#FFFFFF" />
                <Text style={styles.connectedAccountOptionText}>Gmail</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.connectedAccountOption} onPress={() => console.log('Facebook')}>
                <Icon name="facebook" size={20} color="#FFFFFF" />
                <Text style={styles.connectedAccountOptionText}>Facebook</Text>
              </TouchableOpacity>
              {/* Add more connected account options as needed */}
            </View>
            <Button title="Close" onPress={toggleConnectedAccountsModal} />
          </ScrollView>
        </View>
      </Modal>
      {/* Footer buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={navigateBackToMainScreen}>
          <Text style={styles.footerButtonText}>Back to Main</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userEmail: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 20,
  },
  creditButton: {
    backgroundColor: '#282727',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
  },
  sectionTitle: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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
  settingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  settingOptionText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
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
  connectedAccounts: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  connectedAccountOption: {
    alignItems: 'center',
  },
  connectedAccountOptionText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 5,
  },
});

export default Settings;
