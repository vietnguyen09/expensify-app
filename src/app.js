import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


const root = document.getElementById('app');
ReactDOM.render(<p>Loading...</p>, root);
store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, root);
});


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('Log in');
    } else {
        console.log('Log out');
    }
});