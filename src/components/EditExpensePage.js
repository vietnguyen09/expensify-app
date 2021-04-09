import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpanseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.onSubmit(expense);
        this.props.history.push('/');
    }

    onClick = (expense) => {
        this.props.onClick(expense);
        this.props.history.push('/');
    }

    render () {
        <div>
            <ExpanseForm 
                expense={this.props.expense}
                onSubmit={this.onSubmit}
            />
            <button 
                onClick={this.onClick}
            >Remove</button>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => dispatch(editExpense(expense)),
    onClick: (expense) => dispatch(removeExpense({ id: expense.id }))
});

export default connect(undefined, mapDispatchToProps)(EditExpensePage);