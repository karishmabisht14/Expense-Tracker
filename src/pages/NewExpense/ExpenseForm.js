import Modal from "../../components/UI/Modal";
import Button from "../../components/UI/Button";
import "./ExpenseForm.css";
import { useRef, useState } from "react";
import moment from "moment";

export default function ExpenseForm({ onSaveExpenseData, onClose }) {
  const descriptionInput = useRef("");
  const amountInput = useRef("");
  const dateInput = useRef("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const expense = {
      description: descriptionInput.current.value,
      amount: amountInput.current.value,
      date: dateInput.current.value,
      category: category,
    };
    console.log(expense);
    onSaveExpenseData(expense);
  }

  const newDate = moment(new Date()).subtract(2, "year");
  const date = newDate._d;

  return (
    <Modal>
      <h1>Add Expense</h1>
      <form onSubmit={handleSubmit}>
        <div className="new-expense_controls">
          <div className="new-expense_control">
            <input
              type="text"
              id="desc"
              name="desc"
              placeholder="Expense Description *"
              ref={descriptionInput}
              required
            />
          </div>
          <div className="new-expense_control">
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Expense Amount *"
              ref={amountInput}
              required
            />
          </div>
          <div className="new-expense_control">
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled selected hidden>
                Expense Category *
              </option>
              <option value="For Fuel">Fuel</option>
              <option value="For Food">Food</option>
              <option value="For Clothes">Clothes</option>
            </select>
          </div>
          <div className="new-expense_control">
            <label htmlFor="date">Date </label>
            <input
              type="date"
              id="date"
              min={moment(date).format("YYYY-MM-DD")}
              max={moment().format("YYYY-MM-DD")}
              ref={dateInput}
            />
          </div>
        </div>
        <div className="new-expense_actions">
          <Button type="submit">Add Expense</Button>
          <Button type="text" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}
