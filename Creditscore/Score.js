import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ProgressBarAndroid, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Score = () => {
  const navigation = useNavigation();

  const navigateToCreditDetail = () => {
    navigation.navigate('CreditDetail');
  };

  const navigateBackToMainScreen = () => {
    navigation.navigate('Main');
  };

  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };

  // Sample credit score value (you can replace this with your actual score)
  const creditScore = 1325;
  // Calculate the progress value based on credit score (assuming a range of 0-850)
  const progressValue = creditScore / 850;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.creditButton} onPress={navigateToCreditDetail}>
        <View style={styles.scoreCircle}>
          <Text style={styles.creditScore}>{creditScore}</Text>
          <Text style={styles.creditLabel}>Good</Text>
        </View>
        <View style={styles.details}>
          {/* Progress bar */}
          {Platform.OS === 'android' ? (
            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={progressValue} />
          ) : null}
          {/* Additional details */}
          <Text style={styles.detailText}>On-time payments: 90% (1 missed)</Text>
          <Text style={styles.detailText}>Credit Utilization: 95% (Not bad)</Text>
          <Text style={styles.detailText}>Age of Credit: 8 Years (Good)</Text>
          <Text style={styles.detailText}>Total month of Subscription: 2 Months</Text>
        </View>
      </TouchableOpacity>

      {/* Footer buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={navigateToSettings}>
          <Text style={styles.footerButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={navigateBackToMainScreen}>
          <Text style={styles.footerButtonText}>Overview</Text>
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
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  scoreCircle: {
    alignItems: 'center',
    marginBottom: 10,
  },
  creditScore: {
    color: '#FFD700',
    fontSize: 48,
    fontWeight: 'bold',
  },
  creditLabel: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  details: {
    backgroundColor: '#333333',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  detailText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  footerButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  footerButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Score;
