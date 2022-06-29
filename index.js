const redux = require('redux');
const createSore = redux.createStore;

const incrementAction = { type: 'INCREMENT' };
const decrementAction = { type: 'DECREMENT' };

function counterReducer(state = 0, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

const store = createSore(counterReducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementAction);
store.dispatch(decrementAction);
