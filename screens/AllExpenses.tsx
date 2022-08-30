import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expensesCtx?.expenses}
      expensesPeriod={'Total'}
      fallBackText='No registered axpenses found!'
    />
  )
}

const styles = StyleSheet.create({})