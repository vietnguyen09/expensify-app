import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup default filter value', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sort by to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
    const defaultState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filterReducer(defaultState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'Two';
    const action = { 
        type: 'SET_TEXT_FILTER', 
        text
    };
    const state = filterReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should set start date filter', () => {
    const startDate = moment();
    const action = { 
        type: 'SET_START_DATE', 
        startDate
    };
    const state = filterReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('should set end date filter', () => {
    const endDate = moment();
    const action = { 
        type: 'SET_END_DATE', 
        endDate 
    };
    const state = filterReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});