import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
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
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      </Card>
    </li>
  );
}
