import {combineReducers} from 'redux'
import {ChangeDatereducer} from './new/reducer'

const rootReducer = combineReducers({
    changeDate : ChangeDatereducer
})

export default rootReducer