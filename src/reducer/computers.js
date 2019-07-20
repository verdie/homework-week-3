import {ADD_COMPUTER} from '../actions/computers'

export default (state = [], action = {}) => {
    switch(action.type){
        case ADD_COMPUTER:
            return [...state, action.payload]
        default: return state
    }   
}