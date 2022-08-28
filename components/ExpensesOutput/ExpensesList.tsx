import { FlatList, StyleSheet, Text } from 'react-native';
import React from 'react';
import { IDummyExpenses } from '../../constants/dummyExpenses';

interface ExpensesListProps {
  expenses: IDummyExpenses[]
}

interface renderExpenseItemProps {
  item: IDummyExpenses
}

function renderExpenseItem({ item }: renderExpenseItemProps) {
  return (
    <Text>{item.description}</Text>
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