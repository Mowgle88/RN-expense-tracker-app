import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { DUMMY_EXPENSES } from '../constants/dummyExpenses';

export default function RecentExpenses() {
  return (
    <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod={'Last 7 Days'} />
  )
}

const styles = StyleSheet.create({})