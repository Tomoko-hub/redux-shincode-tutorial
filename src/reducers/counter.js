const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            return state - 1;
        case "DOUBLE":
            return state * 2;
        default:
            return state;
    }
};

export default counterReducer;