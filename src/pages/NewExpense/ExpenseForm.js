import Modal from "../../components/UI/Modal";
import Button from "../../components/UI/Button";
import "./ExpenseForm.css";
import { useState } from "react";
import moment from "moment";

export default function ExpenseForm({ onSaveExpenseData, onClose, isEdit }) {
  const [desc, setDesc] = useState(isEdit.description);
  const [amount, setAmount] = useState(isEdit.amount);
  const [date, setDate] = useState(isEdit.date);
  const [category, setCategory] = useState(isEdit.category);

  function handleSubmit(e) {
    e.preventDefault();
    const expense = {
      description: desc,
      amount: amount,
      date: date,
      category: category,
    };
    onSaveExpenseData(expense);
  }

  const newDate = moment(new Date()).subtract(2, "year");
  const formatDate = newDate._d;

  return (
    <Modal>
      <h1>{isEdit.hasOwnProperty("key") ? "Edit Expense" : "Add Expense"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="new-expense_controls">
          <div className="new-expense_control">
            <input
              type="text"
              id="desc"
              name="desc"
              placeholder="Expense Description *"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </div>
          <div className="new-expense_control">
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Expense Amount *"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
              min={moment(formatDate).format("YYYY-MM-DD")}
              max={moment().format("YYYY-MM-DD")}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="new-expense_actions">
          <Button type="submit">
            {isEdit.hasOwnProperty("key") ? "Edit Expense" : "Add Expense"}
          </Button>
          <Button type="text" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}
