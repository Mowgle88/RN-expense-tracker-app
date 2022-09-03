import axios from "axios";
import { IDummyExpenses } from "../constants/dummyExpenses";

const BACKEND_URL = 'https://rn-expense-tracker-app-default-rtdb.firebaseio.com';

export function storeExpenses(expenseData: IDummyExpenses) {
  axios.post(`${BACKEND_URL}/expenses.json`, expenseData)
}

export async function fetchExpenses() {
  const response = await axios.get(`${BACKEND_URL}/expenses.json`);

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}