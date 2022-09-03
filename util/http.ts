import axios from "axios";
import { IDummyExpenses } from "../constants/dummyExpenses";

export function storeExpenses(expenseData: IDummyExpenses) {
  axios.post('https://rn-expense-tracker-app-default-rtdb.firebaseio.com/expenses.json', expenseData)
}