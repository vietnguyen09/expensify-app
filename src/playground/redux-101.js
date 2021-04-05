import { createStore } from 'redux';

// Action generators - functions that return action objects
const incrementCount = (payload = {}) => ({
    type: 'INCREMENT',
    ...payload
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action


const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
                return {
                    count: 0
                };
        default:
            return state;
    }
}

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));