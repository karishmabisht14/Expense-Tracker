import moment from "moment";
import Card from "../../components/UI/Card";
import "./ExpenseDate.css";
export default function ExpenseDate({ date }) {
  const month = moment(date).format("MMMM");
  const year = moment(date).format("YYYY");
  const day = moment(date).format("DD");

  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
}
