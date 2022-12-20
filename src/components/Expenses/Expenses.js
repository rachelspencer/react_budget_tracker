import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    };

    const filteredExpensesByYear = props.items.filter(expense => {
        return expense.date.getFullYear() === +filteredYear;
    });

    return (
        <div>   
            <Card className='expenses'>
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler} 
                />
                <ExpensesList items={filteredExpensesByYear} />
            </Card>
        </div>
    );
}

export default Expenses;