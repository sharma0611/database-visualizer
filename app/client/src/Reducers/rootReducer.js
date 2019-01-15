import { combineReducers } from 'redux'
import { updateVariable, hasErrored, isLoading, summaryData } from './reducers'

export default combineReducers({
    updateVariable,
    hasErrored,
    isLoading,
    summaryData
})
