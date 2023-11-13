import { useState } from "react";
import Button from "../../components/UI/Button";
import "./AddExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function AddExpense({ onAddExpense }) {
  const [isOpen, setIsOpen] = useState(false);

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
    onAddExpense(expense);
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
