import moment from 'moment';
import 
{ 
    setTextFilter, 
    sortByDate, 
    sortByAmount, 
    setStartDate, 
    setEndDate
} from '../../actions/filters';

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('Should set text filter', () => {
    const action = setTextFilter('Test');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Test'
    });
});

test('Should set text filter by default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate action object for sort by date', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
})

test('should generate action object for sort by amount', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
})