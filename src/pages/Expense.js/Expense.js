import { useContext, useState } from "react";
import AddExpense from "../NewExpense/AddExpense";
import ExpenseCard from "./ExpenseCard";
import ExpenseContext from "../../context/ExpenseContext";

export default function Expense() {
  const expenseCtx = useContext(ExpenseContext);
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState({});

  function handleOpen() {
    setIsOpen((prevState) => !prevState);
    setEdit({});
  }

  function handleEdit(data) {
    setEdit(data);
  }

  return (
    <>
      <AddExpense onOpen={handleOpen} open={isOpen} isEdit={edit} />
      {expenseCtx.expenses.length > 0 && (
        <ExpenseCard
          items={expenseCtx.expenses}
          onOpen={handleOpen}
          onEdit={handleEdit}
        />
      )}
    </>
  );
}
