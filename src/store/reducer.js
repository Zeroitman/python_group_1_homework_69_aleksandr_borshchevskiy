const initialState = {
    password: [1, 2, 3, 4],
    array_numbers: [],
    comparison_access: false,
    comparison_denied: false,

};

const reducer = (state = initialState, action) => {
    if (action.type === 'ENTER') {
        let Array = state.array_numbers;
        if (Array.length !== 4){
            Array.push(action.value);
        }
        return {...state, array_numbers: Array};
    }
    if (action.type === 'DELETE') {
        let Array = state.array_numbers;
        Array.pop();
        return {...state, array_numbers: Array};
    }
    if (action.type === 'CHECK') {
        let compare_one = JSON.stringify(state.array_numbers) === JSON.stringify(state.password);
        let compare_two = JSON.stringify(state.array_numbers) !== JSON.stringify(state.password);
        return {...state, comparison_access: compare_one, comparison_denied:compare_two} ;
    }
    return state;


};


export default reducer;

