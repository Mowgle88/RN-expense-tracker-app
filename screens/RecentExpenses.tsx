import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';

export default function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    // const today = new Date();
    // const oneDay = 1000 * 60 * 60 * 24;
    // const diffInTime = today.getTime() - expense.date.getTime();
    // const diffInDays = Math.round(diffInTime / oneDay);
    // return diffInDays < 7;
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  })

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod={'Last 7 Days'} />
  )
}

const styles = StyleSheet.create({})