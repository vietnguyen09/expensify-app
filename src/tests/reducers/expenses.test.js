import expenseReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expenseReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = { 
        type: 'REMOVE_EXPENSE', 
        id: expenses[0].id
    };
    const state = expenseReducers(expenses, action);
    expect(state).toEqual([ expenses[1], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
    const action = { 
        type: 'REMOVE_EXPENSE', 
        id: '6'
    };
    const state = expenseReducers(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add a new expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            description: 'Test',
            note: '',
            amount: 100
        }
    };
    const state = expenseReducers(undefined, action);
    expect(state).toEqual([{...action.expense}]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'Test'
        }
    };
    const state = expenseReducers(expenses, action);
    expect(state[0].description).toBe('Test');
});

test('should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'Test'
        }
    };
    const state = expenseReducers(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expenseReducers(expenses, action);
    expect(state).toEqual([expenses[1]]);
});
