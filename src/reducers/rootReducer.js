export const initialState =  {
    counter: 0,
    name: 'Helloy McWorldFace',
    numOfCakes: 10,
    comp: false
}


const BUY_CAKE = "BUY_CAKE"


const rootReducer = (state = initialState, action) => {


    // add a counter which can be reset, an ability to change name, color etc.
    switch(action.type) {
    case "TOGGLEVISBILITY": 
        return {
            ...state,
            comp: state.comp = !state.comp
        }
    case BUY_CAKE:
        return {
            ...state, 
            numOfCakes: state.numOfCakes - 1}
    case "SELL_CAKE":
        return {
            ...state,
            numOfCakes: state.numOfCakes + 1}
    case 'CHANGENAME':
        return {
            ...state, 
            name: state.name = action.payload}
    case 'INCREMENT':
        return {
            ...state, 
            counter: state.counter + 1}
    case 'DECREMENT':
        return {
            ...state, 
            counter: state.counter - 1}
    case 'DEFAULT':
        return {
            ...state, 
            counter: state.counter = 0}
    case 'ANYAMOUNT': 
        return {
            ...state, 
            counter: state.counter + parseInt(action.payload)}
    case 'RESETHOOKS': 
        return {
            ...state, 
            counter: state.counter + parseInt(action.payload)}

    default: 
        return state;
    }
}


export default rootReducer;

