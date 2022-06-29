const initialState = [{ id: 0, title: 'Redux thunk', completed: false }];

function list(state = initialState, action) {
	switch (action.type) {
		case 'ADD_ITEM':
			return [...state, action.payload];
		default:
			return state;
	}
}

module.exports = {
	list,
};
