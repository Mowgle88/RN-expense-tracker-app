import { StyleSheet } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';

export default function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      setIsFetching(false);
      expensesCtx.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  if (isFetching) {
    return (
      <LoadingOverlay />
    )
  }

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
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod={'Last 7 Days'}
      fallBackText='No expenses registered for the last 7 days'
    />
  )
}

const styles = StyleSheet.create({})