import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ items, onOpen, onEdit }) {
  return (
    <ul>
      {items.map((expense) => {
        return (
          <ExpenseItem
            id={expense.id}
            description={expense.description}
            amount={expense.amount}
            category={expense.category}
            date={expense.date}
            key={expense.id}
            onOpen={onOpen}
            _id={expense._id}
            onEdit={onEdit}
          />
        );
      })}
    </ul>
  );
}
