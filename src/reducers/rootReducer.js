export const initialState =  {
    counter: 0,
    name: 'Helloy McWorldFace'
}

function rootReducer(state = initialState, action){


    // add a counter which can be reset, an ability to change name, color etc.
    switch(action.type) {
    case 'CHANGENAME':
        return {name: state.name = action.payload}
    case 'INCREMENT':
        return {counter: state.counter + 1}
    case 'DECREMENT':
        return {counter: state.counter - 1}
    case 'DEFAULT':
        return {counter: state.counter = 0}
    case 'ANYAMOUNT': 
        return {counter: state.counter + parseInt(action.payload)}

    default: 
        return state;
    }
}

export default rootReducer;