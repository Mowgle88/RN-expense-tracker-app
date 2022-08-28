import { StyleSheet } from 'react-native';
import React from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { DUMMY_EXPENSES } from '../constants/dummyExpenses';

export default function AllExpenses() {
  return (
    <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod={'Total'} />
  )
}

const styles = StyleSheet.create({})