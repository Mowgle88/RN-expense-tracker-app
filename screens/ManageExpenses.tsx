import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { ExpenseItemProps } from '../navigation/types'

export default function ManageExpenses({ route, navigation }: ExpenseItemProps) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    })
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>ManageExpense Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})