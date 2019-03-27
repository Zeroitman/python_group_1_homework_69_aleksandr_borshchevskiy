const initialState = {
    password: [1, 2, 3, 4],
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
    back: "<",
    enter: "ENT",
    array_numbers: [1, 2],
    comparison: false
};

const reducer = (state = initialState, action) => {

    if (action.type === 'ENTER') {
        let Array = state.array_numbers;
        Array.push(action.value);
        return {array_numbers: Array};
    }
    if (action.type === 'DELETE') {
        let Array = state.array_numbers;
        Array.pop();
        return {array_numbers: Array};
    }
    if (action.type === 'CHECK') {
        let compare = JSON.stringify(state.array_numbers) === JSON.stringify(state.password);
        return {comparison: compare};
    }
    if (action.type === 'SUBTRACT') {
        return {counter: state.counter - action.value};
    }
    return state;
};


export default reducer;

