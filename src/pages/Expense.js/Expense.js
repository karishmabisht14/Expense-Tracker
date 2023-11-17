import { useContext, useState } from "react";
import AddExpense from "../NewExpense/AddExpense";
import ExpenseCard from "./ExpenseCard";
import ExpenseContext from "../../context/ExpenseContext";

export default function Expense() {
  const expenseCtx = useContext(ExpenseContext);
  console.log(expenseCtx.expenses);
  return (
    <>
      <AddExpense />
      {expenseCtx.expenses.length > 0 && (
        <ExpenseCard items={expenseCtx.expenses} />
      )}
    </>
  );
}
