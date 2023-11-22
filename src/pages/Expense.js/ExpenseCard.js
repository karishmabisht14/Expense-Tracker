import Card from "../../components/UI/Card";
import ExpenseList from "./ExpenseList";
import "./ExpenseCard.css";

export default function ExpenseCard({ items, onOpen, onEdit }) {
  return (
    <Card className="expenses">
      <ExpenseList items={items} onOpen={onOpen} onEdit={onEdit} />
    </Card>
  );
}
