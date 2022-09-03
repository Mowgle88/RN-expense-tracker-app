import axios from "axios";
import { IDummyExpenses } from "../constants/dummyExpenses";

const BACKEND_URL = 'https://rn-expense-tracker-app-default-rtdb.firebaseio.com';

export async function storeExpenses(expenseData: IDummyExpenses) {
  const response = await axios.post(`${BACKEND_URL}/expenses.json`, expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get<IDummyExpenses[]>(`${BACKEND_URL}/expenses.json`);

  const expenses = [];

  // console.log(response.data);

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