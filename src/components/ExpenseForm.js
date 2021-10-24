import React, { useState } from "react";
// import ExpenseDate from "./ExpenseDate";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const addedExpenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(addedExpenseData);

    props.onSubmitNewExpenseData(addedExpenseData); // this is the function i used on the newExpense to pass the info added to the form
    setEnteredTitle(""); //two way bindings: after the form is submitted, the original-empty value will be restored
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input
            onChange={titleChangeHandler}
            type="text"
            value={enteredTitle}
          />
        </div>

        <div className="new-expense__control">
          <label> Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="new-expense__control">
          <label> Date</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            value={enteredDate} //two way binding: set value
            min="2021-01-01"
            max="2022-12-31"
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit"> Add new Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
