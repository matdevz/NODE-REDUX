const increment = (value) => ({ type: 'INCREMENT', payload: value || 1 });
const decrement = (value) => ({ type: 'DECREMENT', payload: value || 1 });

module.exports = {
	increment,
	decrement,
};
