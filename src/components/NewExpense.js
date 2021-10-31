import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  //i called the pointer in expenseform, create a function that will be used to pass values to expensefor,
  const [isEditing, setIsEditing] = useState(false);

  const submitNewExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);
    props.onAddExpense(expenseData); // props that will pass data to app.js , to pass data up to parent
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add Neew Expense </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSubmitNewExpenseData={submitNewExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
