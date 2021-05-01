import React from 'react';
import { connect } from 'react-redux';
import selectExpenseTotal from '../selectors/expenses-total';
import selectExpense from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => (
    <div>
        Total amount: {numeral(expensesTotal / 100).format('$0,00.00')} 
        - 
        Total expenses: {expenseCount}
    </div>
);

// Redux connect
const mapStateToProps = (state) => {
    const visibleExpenses = selectExpense(state.expenses, state.filters);
    return {
        expensesTotal: selectExpenseTotal(visibleExpenses),
        expenseCount: visibleExpenses.length
    }
};

export default connect(mapStateToProps)(ExpensesSummary);