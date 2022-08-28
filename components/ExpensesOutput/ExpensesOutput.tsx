import { StyleSheet, View } from 'react-native';
import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { IDummyExpenses } from '../../constants/dummyExpenses';
import { GlobalStyles } from '../../constants/style';

interface ExpensesOutputProps {
  expenses: IDummyExpenses[],
  expensesPeriod: string
}

export default function ExpensesOutput({ expenses, expensesPeriod }: ExpensesOutputProps) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
})