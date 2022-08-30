import { StyleSheet, View } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { ExpenseItemProps } from '../navigation/types'
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/style';
import CustomButton from '../components/UI/CustomButton';
import { ExpensesContext } from '../store/expenses-context';

export default function ManageExpenses({ route, navigation }: ExpenseItemProps) {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    })
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpenses(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpenses(
        editedExpenseId,
        {
          description: 'Update Test',
          amount: 29.99,
          date: new Date('2022-08-31')
        }
      );
    } else {
      expensesCtx.addExpenses(
        {
          description: 'Add Test',
          amount: 19.99,
          date: new Date('2022-08-30')
        }
      );
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <CustomButton style={styles.button} onPress={cancelHandler} mode={'flat'}>Cancel</CustomButton>
        <CustomButton style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</CustomButton>
      </View>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
})