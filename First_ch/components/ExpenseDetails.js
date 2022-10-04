import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from './FilterComponent/ExpensesFilter';
import './ExpenseDetails.css';

function ExpenseDetails(props) {
  const [filteredYear, setFilteredYear] = useState(`2020`);
  const pickYearHandler = (year) => {
    setFilteredYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onPickYearHandler={pickYearHandler}
        />
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
}
export default ExpenseDetails;
