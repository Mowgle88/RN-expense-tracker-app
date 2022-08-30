import { createContext, ReactNode, useReducer } from "react";
import { DUMMY_EXPENSES, IDummyExpenses } from "../constants/dummyExpenses";

interface ExpensesContextProviderProps {
  children: React.ReactNode
}

interface IExpensesContext {
  expenses: IDummyExpenses[];
  addExpenses: (expensesData: IDummyExpenses) => void;
  updateExpenses: (id: string, expensesData: IDummyExpenses) => void;
  deleteExpenses: (id: string) => void;
}

type ACTIONTYPE =
  | { type: "ADD"; payload: IDummyExpenses }
  | { type: "UPDATE"; payload: { id: string, data: IDummyExpenses } }
  | { type: "DELETE"; payload: string };

export const ExpensesContext = createContext<IExpensesContext | null>({
  expenses: [],
  addExpenses: ({ description, amount, date }: IDummyExpenses) => { },
  deleteExpenses: (id: string) => { },
  updateExpenses: (id: string, { description, amount, date }: IDummyExpenses) => { },
});

const initialState = DUMMY_EXPENSES;

function expensesReducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state]
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
      const updatableExpense = state[updatableExpenseIndex];
      const updateItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updateItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }: ExpensesContextProviderProps) {
  const [expensesState, dispatch] = useReducer(expensesReducer, initialState);

  function addExpenses(expensesData: IDummyExpenses) {
    dispatch({ type: 'ADD', payload: expensesData });
  }

  function updateExpenses(id: string, expensesData: IDummyExpenses) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expensesData } });
  }

  function deleteExpenses(id: string) {
    dispatch({ type: 'DELETE', payload: id });
  }

  const value = {
    expenses: expensesState,
    addExpenses: addExpenses,
    updateExpenses: updateExpenses,
    deleteExpenses: deleteExpenses,
  }

  return (
    <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
  )
}

export default ExpensesContextProvider;