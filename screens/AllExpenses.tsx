import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { DUMMY_EXPENSES } from '../constants/dummyExpenses';
import { ExpensesContext } from '../store/expenses-context';

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput expenses={expensesCtx?.expenses} expensesPeriod={'Total'} />
  )
}

const styles = StyleSheet.create({})