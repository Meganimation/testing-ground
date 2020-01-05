

import initialState from './rootReducer'



const nameReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGENAME':
            return {name: state.name = action.payload}
    }
}

export default nameReducer;