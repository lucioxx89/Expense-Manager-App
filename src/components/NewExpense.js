import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  //i called the pointer in expenseform, create a function that will be used to pass values to expensefor,
  const submitNewExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);
    props.onAddExpense(expenseData); // props that will pass data to app.js , to pass data up to parent
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitNewExpenseData={submitNewExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
