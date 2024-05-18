import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';

const MainScreen = ({ navigation, dailyBudget, setDailyBudget }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [budgetData, setBudgetData] = useState({
    totalSaved: 1550,
    leftToSpend: 0,
    categories: [
      { name: 'Total Expenses', spent: 0, icon: 'cash' },
      { name: 'Auto & Transport', spent: 0, icon: 'car' },
      { name: 'Food', spent: 0, icon: 'restaurant' },
      { name: 'Unforeseen Expenses', spent: 0, icon: 'alert' },
    ],
  });

  // Function to calculate total expenses and update left to spend
  const calculateTotalExpenses = useCallback(() => {
    const totalSpent = budgetData.categories.reduce((total, category) => {
      if (category.name !== 'Total Expenses') {
        return total + category.spent;
      }
      return total;
    }, 0);

    setBudgetData(prevData => {
      if (prevData.leftToSpend !== dailyBudget - totalSpent || prevData.categories[0].spent !== totalSpent) {
        return {
          ...prevData,
          categories: prevData.categories.map(category =>
            category.name === 'Total Expenses' ? { ...category, spent: totalSpent } : category
          ),
          leftToSpend: dailyBudget - totalSpent,
        };
      }
      return prevData;
    });
  }, [budgetData.categories, dailyBudget]);

  useEffect(() => {
    calculateTotalExpenses();
  }, [calculateTotalExpenses]);

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  // Function to update expenses
  const updateExpenses = (categoryName, amount) => {
    setBudgetData(prevData => ({
      ...prevData,
      categories: prevData.categories.map(category =>
        category.name === categoryName ? { ...category, spent: category.spent + amount } : category
      ),
    }));
  };

  return (
    <ImageBackground source={require('./PentDark.png')} style={styles.backgroundImage}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Total Saved Money</Text>
          <TouchableOpacity style={styles.plusIcon} onPress={() => navigation.navigate('Add', { updateExpenses })}>
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

        <View style={styles.totalExpensesContainer}>
          <Text style={styles.totalExpensesText}>Total Expenses: ₱{budgetData.categories.find(c => c.name === 'Total Expenses').spent}</Text>
        </View>

        <View style={styles.budgetFrame}>
          <View style={styles.budgetOverview}>
            <Text style={styles.budgetText}>Left to spend</Text>
            <Text style={styles.budgetAmount}>₱{budgetData.leftToSpend}</Text>
            <Text style={styles.budgetText}>Daily budget</Text>
            <TextInput
              style={styles.budgetAmountInput}
              value={dailyBudget.toString()}
              onChangeText={text => setDailyBudget(Number(text))}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.categories}>
            {budgetData.categories.map((category, index) => (
              <View key={index} style={styles.category}>
                <View style={styles.categoryIcon}>
                  <Ionicons name={category.icon} size={24} color="white" />
                </View>
                <View style={styles.categoryDetails}>
                  <Text style={styles.categoryName}>{category.name}</Text>
                  <Text style={styles.categorySpent}>Spent: ₱{category.spent}</Text>
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
            onPress={() => navigation.navigate('Settings')}
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
  totalExpensesContainer: {
    backgroundColor: '#333333',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  totalExpensesText: {
    color: 'white',
    fontSize: 18,
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
  budgetAmountInput: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    textAlign: 'center',
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
  categorySpent: {
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
});

export default MainScreen;
