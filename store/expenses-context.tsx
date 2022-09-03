import { createContext, ReactNode, useReducer } from "react";
import { IDummyExpenses } from "../constants/dummyExpenses";

interface ExpensesContextProviderProps {
  children: ReactNode
}

export interface IExpensesContext {
  expenses: IDummyExpenses[],
  setExpenses: (expenses: IDummyExpenses[]) => void,
  addExpenses: (expensesData: IDummyExpenses) => void,
  updateExpenses: (id: string, expensesData: IDummyExpenses) => void,
  deleteExpenses: (id: string) => void,
}

type ACTIONTYPE =
  | { type: "ADD"; payload: IDummyExpenses }
  | { type: "SET"; payload: IDummyExpenses[] }
  | { type: "UPDATE"; payload: { id: string, data: IDummyExpenses } }
  | { type: "DELETE"; payload: string };

export const ExpensesContext = createContext<IExpensesContext>({
  expenses: [],
  setExpenses: (expenses: IDummyExpenses[]) => { },
  addExpenses: ({ description, amount, date }: IDummyExpenses) => { },
  deleteExpenses: (id: string) => { },
  updateExpenses: (id: string, { description, amount, date }: IDummyExpenses) => { },
});

const initialState: IDummyExpenses[] = [];

function expensesReducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'ADD':
      // const id = new Date().toString() + Math.random().toString();
      // return [{ ...action.payload, id: id }, ...state];
      return [action.payload, ...state];
    case 'SET':
      const inverted = action.payload.reverse();
      return inverted;
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

  function setExpenses(expenses: IDummyExpenses[]) {
    dispatch({ type: 'SET', payload: expenses });
  }

  function updateExpenses(id: string, expensesData: IDummyExpenses) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expensesData } });
  }

  function deleteExpenses(id: string) {
    dispatch({ type: 'DELETE', payload: id });
  }

  const value = {
    expenses: expensesState,
    setExpenses: setExpenses,
    addExpenses: addExpenses,
    updateExpenses: updateExpenses,
    deleteExpenses: deleteExpenses,
  }

  return (
    <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
  )
}

export default ExpensesContextProvider;