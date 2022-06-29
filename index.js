const { createStore, combineReducers, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;

const counterReducer = require('./reducers/CounterReducer');
const listReducer = require('./reducers/ListReducer');
const actionCounter = require('./actions/CounterAction');
const actionList = require('./actions/ListAction');

const allReducers = combineReducers({
	counter: counterReducer.counter,
	list: listReducer.list,
});
const store = createStore(allReducers, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

store.dispatch(actionList.loadItems());
