// we separate the date componenent from the ExpenseItem component. We need to pass all informatioln by props from one component to the other one

import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" }); // to hav jsx code clean, we pass the value into a constant variable and then call it.
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      {/* <div> {props.date.toLocaleString("en-US", { month: "long" })}</div> // we create a variable for that */}
      <div className="expense-date__month"> {month} </div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
