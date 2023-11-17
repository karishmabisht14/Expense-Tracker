import { useState, useContext } from "react";
import Button from "../../components/UI/Button";
import "./AddExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseContext from "../../context/ExpenseContext";

export default function AddExpense() {
  const [isOpen, setIsOpen] = useState(false);
  const expenseCtx = useContext(ExpenseContext);

  function handleIsOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function saveExpenseDataHandler(expenseData) {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    expenseCtx.addExpense(expense);
    setIsOpen(false);
  }
  return (
    <>
      <div className="new-expense">
        <Button onClick={handleIsOpen}>Add Expense</Button>
      </div>
      {isOpen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClose={handleClose}
        />
      )}
    </>
  );
}
