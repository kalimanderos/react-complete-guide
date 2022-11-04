import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expense(props) {
    const expenses = props.data;
    return (<div className="expenses">
    <ExpenseItem data={expenses[0]}></ExpenseItem>
      <ExpenseItem data={expenses[1]}></ExpenseItem>
      <ExpenseItem data={expenses[2]}></ExpenseItem>
      <ExpenseItem data={expenses[3]}></ExpenseItem>
    </div>)
}

export default Expense;