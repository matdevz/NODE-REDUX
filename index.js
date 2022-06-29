const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const incrementAction = (value) => ({ type: 'INCREMENT', payload: value || 1 });
const decrementAction = (value) => ({ type: 'DECREMENT', payload: value || 1 });

function counterReducer(state = 0, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + action.payload;
		case 'DECREMENT':
			return state - action.payload;
		default:
			return state;
	}
}

const addItemAction = (item) => ({ type: 'ADD_ITEM', payload: item });

function listReducer(state = [], action) {
	switch (action.type) {
		case 'ADD_ITEM':
			return [...state, action.payload];
		default:
			return state;
	}
}
const allReducers = combineReducers({
	counter: counterReducer,
	list: listReducer,
});
const store = createStore(allReducers);
store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementAction(10));
store.dispatch(decrementAction(7));
