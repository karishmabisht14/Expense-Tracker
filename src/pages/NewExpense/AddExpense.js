import { useContext } from "react";
import Button from "../../components/UI/Button";
import "./AddExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseContext from "../../context/ExpenseContext";

export default function AddExpense({ onOpen, open, isEdit }) {
  const expenseCtx = useContext(ExpenseContext);

  function saveExpenseDataHandler(expenseData) {
    if (isEdit.hasOwnProperty("key")) {
      console.log("edit");
      const editExpense = {
        ...expenseData,
        id: isEdit.id,
      };
      expenseCtx.addExpense(editExpense);
    } else {
      const expense = {
        ...expenseData,
        id: Math.random().toString(),
      };
      expenseCtx.addExpense(expense);
    }
    onOpen();
  }

  return (
    <>
      <div className="new-expense">
        <Button onClick={onOpen}>Add Expense</Button>
      </div>
      {open && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClose={onOpen}
          isEdit={isEdit}
        />
      )}
    </>
  );
}
