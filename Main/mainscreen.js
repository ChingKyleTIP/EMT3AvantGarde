import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';

const MainScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const budgetData = {
    totalSaved: 1550,
    leftToSpend: 148,
    dailyBudget: 400,
    categories: [
      { name: 'Total Expenses', budget: 252, spent: 612 }, // Using cash icon for Expenses
      { name: 'Auto & Transport', budget: 100, spent: 98 }, // Using car icon for Auto & Transport
      { name: 'Food', budget: 60, spent: 120 }, // Using restaurant icon for Food
      { name: 'Unforeseen Expenses', budget: 40, spent: 120 }, // Using alert icon for Unforeseen Expenses
    ],
  };

  const navigateToCreditScore = () => {
    navigation.navigate('CreditScore');
  };

  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <ImageBackground source={require('C:/Users/Ching/Documents/NEWEMT3/project - Copy/images/PentDark.png')} style={styles.backgroundImage}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Total Saved Money</Text>
          <TouchableOpacity style={styles.plusIcon} onPress={() => navigation.navigate('Add')}>
            <Ionicons name="add" size={30} color='white' />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}

        {/* Credit Score Component */}
        <TouchableOpacity style={styles.centeredContainer} onPress={navigateToCreditScore}>
          <View style={styles.creditButton}>
            <View style={styles.scoreCircle}>
              <Text style={styles.creditScore}>1325</Text>
              <Text style={styles.creditLabel}>Good</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.detailText}>On-time payments: 90% (1 missed)</Text>
              <Text style={styles.detailText}>Credit Utilization: 95% (Not bad)</Text>
              <Text style={styles.detailText}>Age of Credit: 8 Years (Good)</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.budgetFrame}>
          <View style={styles.budgetOverview}>
            <Text style={styles.budgetText}>Left to spend</Text>
            <Text style={styles.budgetAmount}>₱{budgetData.leftToSpend}</Text>
            <Text style={styles.budgetText}>Daily budget</Text>
            <Text style={styles.budgetAmount}>₱{budgetData.dailyBudget}</Text>
          </View>
          <View style={styles.categories}>
            {budgetData.categories.map((category, index) => (
              <View key={index} style={styles.category}>
                <View style={styles.categoryIcon}>
                  <Ionicons name={category.icon} size={24} color="white" />
                </View>
                <View style={styles.categoryDetails}>
                  <Text style={styles.categoryName}>{category.name}</Text>
                  <View style={styles.categoryProgress}>
                    <View
                      style={[
                        styles.progress,
                        { width: `${(100 * category.spent) / category.budget}%` },
                      ]}
                    />
                  </View>
                  <Text style={styles.categoryBudget}>₱{category.budget}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.iconButtons}>
          <IconButton
            icon="cog"
            color="#ffffff"
            size={50}
            style={[styles.iconButton, styles.settingsButton]}
            onPress={navigateToSettings}
          />
          <IconButton
            icon="credit-card"
            color="#ffffff"
            size={50}
            style={[styles.iconButton, styles.creditScoreButton]}
            onPress={navigateToCreditScore}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plusIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 10,
  },
  datePickerButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    color: 'white',
  },
  headerTitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  budgetFrame: {
    backgroundColor: 'rgba(61, 61, 61, 0.5)',
    margin: 20,
    borderRadius: 10,
    padding: 20,
  },
  budgetOverview: {
    marginBottom: 20,
  },
  budgetText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
  budgetAmount: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  categories: {},
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryIcon: {
    marginRight: 10,
  },
  categoryDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  categoryName: {
    fontSize: 18,
    color: 'white',
    flex: 1,
  },
  categoryProgress: {
    backgroundColor: '#eee',
    height: 20,
    borderRadius: 10,
    overflow: 'hidden',
    flex: 1,
    marginHorizontal: 10,
  },
  progress: {
    backgroundColor: '#00ff00',
    borderRadius: 10,
  },
  categoryBudget: {
    fontSize: 18,
    color: 'white',
  },
  iconButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  iconButton: {
    borderRadius: 10,
  },
  settingsButton: {
    backgroundColor: 'rgba(76, 175, 80, 0.5)',
  },
  creditScoreButton: {
    backgroundColor: 'rgba(76, 175, 80, 0.5)',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  creditButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(76, 175, 80, 0.5)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '80%',
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  scoreCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 50,
    marginRight: 20,
  },
  creditScore: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  creditLabel: {
    fontSize: 18,
    color: '#4CAF50',
  },
  details: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 20,
    marginTop: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 5,
  },
});

export default MainScreen;
