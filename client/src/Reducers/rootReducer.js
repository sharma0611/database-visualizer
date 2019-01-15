import { combineReducers } from 'redux'
import { variable, hasErrored, isLoading, summaryData } from './reducers'

export default combineReducers({
    variable,
    hasErrored,
    isLoading,
    summaryData
})
