// state
const initialState = {
  name: 'Unknown User'
};

// mutation
export default (state = initialState, action) => {
	switch (action.type) {
	    case 'SET_NAME':
	      return { ...state, name: action.payload }

	    default:
	      return state;
	}
}
