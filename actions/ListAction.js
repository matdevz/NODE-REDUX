const axios = require('axios').default;

const addItem = (item) => ({ type: 'ADD_ITEM', payload: item });

function loadItems() {
	return async (dispatch) => {
		try {
			axios
				.get('https://jsonplaceholder.typicode.com/todos/1')
				.then((res) => dispatch(addItem(res.data)));
		} catch (error) {
			console.error(error);
		}
	};
}

module.exports = { addItem, loadItems };
