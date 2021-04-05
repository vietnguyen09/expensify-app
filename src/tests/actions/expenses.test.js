import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: '123abc'
    });
});

test('Should setup edit expense', () => {
    const action = editExpense('123abc', {
        description: 'Test',
        amount: 100
    });

    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: '123abc',
        updates: {
            description: 'Test',
            amount: 100
        }
    })
});

test('Should setup add expense', () => {
    const expenseData = {
        description: 'Test',
        amount: 100,
        createdAt: 1000,
        note: 'Test note'
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup add expense with default value', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0 
        }
    });
});