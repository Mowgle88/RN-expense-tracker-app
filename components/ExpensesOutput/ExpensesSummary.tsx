import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IDummyExpenses } from '../../constants/dummyExpenses';

interface ExpensesSummaryProps {
  expenses: IDummyExpenses[],
  periodName: string
}

export default function ExpensesSummary({ expenses, periodName }: ExpensesSummaryProps) {

  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expenseSum.toFixed(2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})