import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ items }) {
  return (
    <ul>
      {items.map((expense) => {
        return (
          <ExpenseItem
            description={expense.description}
            amount={expense.amount}
            category={expense.category}
            date={expense.date}
            key={expense.id}
          />
        );
      })}
    </ul>
  );
}
