import ExpenseItem from "./ExpenseItem.js";
import "./ExpensesList.css";

function ExpensesList(props) {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No Expense Found ...</h2>
    }

    return (
        <ul className="expenses-list">
            {
                props.items.map((filterexpense) => {
                    return <ExpenseItem key={filterexpense.id} title={filterexpense.title} amount={filterexpense.amount} date={filterexpense.date} />

                })
            }

        </ul>
    );
}
export default ExpensesList;