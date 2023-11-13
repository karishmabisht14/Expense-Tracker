import Card from "../../components/UI/Card";
import ExpenseList from "./ExpenseList";
import "./ExpenseCard.css";

export default function ExpenseCard({ items }) {
  return (
    <div>
      <Card className="expenses">
        <ExpenseList items={items} />
      </Card>
    </div>
  );
}
