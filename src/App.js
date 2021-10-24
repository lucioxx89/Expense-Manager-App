// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
function App() {
  // const paragraph = document.createElement("p");  this is how we will do it in regular js --> IMPERATIVE APPROACH
  // paragraph.textContent="This is also visible";
  // document.getElementById("root").append(paragraph);

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addedExpenseHandler = (expense) => {
    console.log("In app js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addedExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
