import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { CONSTANTS } from "../utils/constants";
import { formatObjectToArray } from "../utils/helper";

const ExpenseContext = createContext({
  expenses: [],
  addExpense: (expense) => {},
  deleteExpense: (expense) => {},
});

export function ExpenseProvider(props) {
  const authCtx = useContext(AuthContext);
  const [expenses, setExpenses] = useState([]);

  let userEmailId = authCtx.email;

  if (authCtx.isLoggedIn) {
    userEmailId = userEmailId.replaceAll(/\.|\@/g, "");
  }

  useEffect(() => {
    async function getData() {
      const response = await fetch(`${CONSTANTS.baseURL}/${userEmailId}.json`);
      if (!response.ok) {
        throw new Error("Data is not fetched");
      } else {
        const data = await response.json();
        const storedData = formatObjectToArray(data);
        setExpenses([...expenses, ...storedData]);
      }
    }
    getData();
  }, []);

  async function addToExpenseHandler(expense) {
    const newExpense = [...expenses];
    const expenseIndex = expenses.findIndex((ele) => ele.id === expense.id);
    if (expenseIndex !== -1) {
      const updateExpense = { ...newExpense[expenseIndex] };
      const response = await fetch(
        `${CONSTANTS.baseURL}/${userEmailId}/${updateExpense._id}.json`,
        {
          method: "PUT",
          body: JSON.stringify(expense),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something is wrong in edit expense");
      }
      newExpense[expenseIndex] = expense;
      setExpenses([...newExpense]);
    } else {
      const response = await fetch(`${CONSTANTS.baseURL}/${userEmailId}.json`, {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        expense["_id"] = data.name;
      } else {
        throw new Error("Something went wrong");
      }
      setExpenses([...expenses, expense]);
    }
  }

  async function deleteToExpenseHandler(expense) {
    const newExpense = [...expenses];
    const expenseIndex = expenses.findIndex((ele) => ele.id === expense.id);
    const response = await fetch(
      `${CONSTANTS.baseURL}/${userEmailId}/${expense._id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      newExpense.splice(expenseIndex, 1);
      setExpenses([...newExpense]);
    } else {
      throw new Error("Something wrong in the delete expense");
    }
  }
  const expenseContext = {
    expenses: expenses,
    addExpense: addToExpenseHandler,
    deleteExpense: deleteToExpenseHandler,
  };
  return (
    <ExpenseContext.Provider value={expenseContext}>
      {props.children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseContext;
