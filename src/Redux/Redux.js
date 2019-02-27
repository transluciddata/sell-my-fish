import { createStore } from 'redux';


const initialState = {
    counter: 0
}

const reducer = (state= initialState, action) => {
    const updatedState = {...state};
    switch(action.type) {
        case 'INC':
        updatedState.counter = state.counter + 1;
        return updatedState;
        case 'DEC':
        updatedState.counter = state.counter - 1;
        return updatedState;        
        default:
        return state;
    }
}

export const increment = () => {
    return {
        type: 'INC'
    }
}

export const decrement = () => {
    return {
        type: 'DEC'
    }
}


export const store = createStore(reducer);
