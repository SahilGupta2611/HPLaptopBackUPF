import './Expenses.css';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    var filteredExpenses = [];
    const [filteredYear, setFilteredYear] = useState('2021');

    filteredExpenses = props.data.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear.toString();
    })

    const filterChangeHandler = (selectedYear) => {
        console.log(filteredExpenses)
        setFilteredYear(selectedYear);
    }


    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );

}
export default Expenses;