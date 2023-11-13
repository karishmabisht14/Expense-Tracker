export default function ExpenseDetail(props) {
  return (
    <div className="expense-item__description">
      <h2>{props.description}</h2>
      <div>{props.category}</div>
      <div className="expense-item__price">$ {props.amount}</div>
    </div>
  );
}
