import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { IDummyExpenses } from '../../constants/dummyExpenses';
import { GlobalStyles } from '../../constants/style';

interface ExpensesOutputProps {
  expenses: IDummyExpenses[],
  expensesPeriod: string,
  fallBackText: string
}

export default function ExpensesOutput({ expenses, expensesPeriod, fallBackText }: ExpensesOutputProps) {
  let content = <Text style={styles.infoText}>{fallBackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32
  }
})