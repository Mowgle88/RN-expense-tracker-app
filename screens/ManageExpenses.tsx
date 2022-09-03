import { StyleSheet, View } from 'react-native';
import React, { useContext, useLayoutEffect, useState } from 'react';
import { ExpenseItemProps } from '../navigation/types';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/style';
import { ExpensesContext } from '../store/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { IDummyExpenses } from '../constants/dummyExpenses';
import { deleteExpense, storeExpenses, updateExpense } from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';

export default function ManageExpenses({ route, navigation }: ExpenseItemProps) {
  const expensesCtx = useContext(ExpensesContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    })
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    setIsSubmitting(true);
    expensesCtx.deleteExpenses(editedExpenseId);
    await deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData: IDummyExpenses) {
    setIsSubmitting(true);
    if (isEditing) {
      expensesCtx.updateExpenses(editedExpenseId, expenseData);
      await updateExpense(editedExpenseId, expenseData);
    } else {
      const id = await storeExpenses(expenseData);
      expensesCtx.addExpenses({ ...expenseData, id: id });
    }
    navigation.goBack();
  }

  if (isSubmitting) {
    return (
      <LoadingOverlay />
    )
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense!}
      />
      {isEditing &&
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash'
            size={24}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
})