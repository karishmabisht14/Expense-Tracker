import { useState } from "react";
import AddExpense from "../NewExpense/AddExpense";
import ExpenseCard from "./ExpenseCard";

export default function Expense() {
  const [expenses, setExpenses] = useState([]);

  function handleAddExpense(expenseData) {
    setExpenses((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  }
  return (
    <>
      <AddExpense onAddExpense={handleAddExpense} />
      {expenses.length > 0 && <ExpenseCard items={expenses} />}
    </>
  );
}
