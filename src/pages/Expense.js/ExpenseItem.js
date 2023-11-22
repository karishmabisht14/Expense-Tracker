import { useContext } from "react";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import "./ExpenseItem.css";
import ExpenseContext from "../../context/ExpenseContext";

export default function ExpenseItem(props) {
  const expenseCtx = useContext(ExpenseContext);

  function handleEdit(data) {
    props.onOpen();
    props.onEdit(data);
  }

  function handleDelete(expense) {
    expenseCtx.deleteExpense(expense);
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetail
          description={props.description}
          amount={props.amount}
          category={props.category}
        />
        <div className="actions">
          <Button onClick={() => handleEdit(props)}>Edit</Button>
          <Button onClick={() => handleDelete(props)}>Delete</Button>
        </div>
      </Card>
    </li>
  );
}
