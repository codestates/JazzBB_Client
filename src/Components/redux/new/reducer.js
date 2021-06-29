import {CHANGE_DATE} from './types'

const initialState = {
    subscribers : 365
}

const ChangeDatereducer = (state=initialState, action) => {
    switch(action.type){
        case CHANGE_DATE:
            return{
                ...state,
                subscribers : state.subscribers +1
            }
            default : return state;
    }
   }

export default ChangeDatereducer