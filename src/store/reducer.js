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
    array_numbers: [1, 2, 3, 4],
    comparison: false,
};

const reducer = (state = initialState, action) => {
    if (action.type === 'ENTER') {
        let Array = state.array_numbers;
        if (Array.length !== 4){
            Array.push(action.value);
        }
        return {array_numbers: Array};
    }
    if (action.type === 'DELETE') {
        let Array = state.array_numbers;
        Array.pop();
        return {array_numbers: Array};
    }
    if (action.type === 'CHECK') {
        console.log(state.array_numbers);
        console.log(state.password);
        let compare = JSON.stringify(state.array_numbers) === JSON.stringify(state.password);
        console.log(compare);
        return {comparison: compare};
    }
    return state;
};


export default reducer;

