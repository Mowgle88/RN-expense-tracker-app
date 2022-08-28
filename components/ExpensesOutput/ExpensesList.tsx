import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { IDummyExpenses } from '../../constants/dummyExpenses';
import ExpenseItem from './ExpenseItem';

interface ExpensesListProps {
  expenses: IDummyExpenses[]
}

interface renderExpenseItemProps {
  item: IDummyExpenses
}

function renderExpenseItem({ item }: renderExpenseItemProps) {
  const props = {
    description: item.description,
    amount: item.amount,
    date: item.date.toString()
  }

  return (
    <ExpenseItem {...props} />
  )
}

export default function ExpensesList({ expenses }: ExpensesListProps) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  )
}

const styles = StyleSheet.create({})