const redux = require('redux');
const counterReducer = require('./reducers/CounterReducer');
const listReducer = require('./reducers/ListReducer');
const actionCounter = require('./actions/CounterAction');
const actionList = require('./actions/ListAction');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const allReducers = combineReducers({
	counter: counterReducer.counter,
	list: listReducer.list,
});
const store = createStore(allReducers);
store.subscribe(() => console.log(store.getState()));

store.dispatch(actionList.addItem('Leaning Git and Redux'));
store.dispatch(actionList.addItem('Learning React and Node'));

store.dispatch(actionCounter.increment(10));
store.dispatch(actionCounter.decrement(7));
