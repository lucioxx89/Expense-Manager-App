// import React, { Component } from "react";  // CLASS COMPONENT IMPORT
import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

//CLASS COMPONENT WITH SETSATE

// class ExpenseItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: this.props.title,
//     };
//   }
//   clickHandler = () => {
//     console.log("Clicked!!");
//     this.setState({ value: "Updated!" });
//   };

//   render() {
//     return (
//       <div className="expense-item">
//         <ExpenseDate date={this.props.date} />
//         <div className="expense-item__description">
//           <h2>{this.state.value}</h2>
//           <div className="expense-item__price">${this.props.amount}</div>
//         </div>
//         <button onClick={this.clickHandler}>Change Title</button>
//       </div>
//     );
//   }
// }

// FUNCTION COMPONENT WITH HOOKS

const ExpenseItem = (props) => {
  // const [title, SetTitle] = useState(props.title);
  // // console.log("title");

  // const clickHandler = () => {
  //   SetTitle("Updated!");
  // };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </div>
  );
};

export default ExpenseItem;
