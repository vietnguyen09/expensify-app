import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(
        <ExpensesSummary 
            expenseCount={1}
            expensesTotal={252}
        />
    );
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(
        <ExpensesSummary 
            expenseCount={23}
            expensesTotal={2665656597898}
        />
    );
    expect(wrapper).toMatchSnapshot();
})