import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IDummyExpenses } from '../../constants/dummyExpenses';
import { GlobalStyles } from '../../constants/style';

interface ExpensesSummaryProps {
  expenses: IDummyExpenses[],
  periodName: string
}

export default function ExpensesSummary({ expenses, periodName }: ExpensesSummaryProps) {

  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expenseSum.toFixed(2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500
  }
})