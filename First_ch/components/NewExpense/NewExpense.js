import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpenseHandler(ExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDataHandler={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
