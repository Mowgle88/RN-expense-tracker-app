import { StyleSheet, View } from 'react-native';
import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { IDummyExpenses } from '../../constants/dummyExpenses';

interface ExpensesOutputProps {
  expenses: IDummyExpenses[],
  expensesPeriod: string
}

export default function ExpensesOutput({ expenses, expensesPeriod }: ExpensesOutputProps) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  )
}

const styles = StyleSheet.create({})