import { summaryError, summaryFetchSuccess, summaryIsLoading, updateVariable } from './actions'

// action creator for API call
export function fetchSummaryData(variable) {
    return async dispatch => {
        dispatch(updateVariable(variable))
        dispatch(summaryIsLoading(true))
        try {
            const response = await fetch('/api/stats/' + variable)
            if (response.status < 200 || response.status > 299) {
                throw Error(response.statusText)
            }
            var body = await response.json()
            dispatch(summaryFetchSuccess(body))
            dispatch(summaryIsLoading(false))
        } catch (e) {
            dispatch(summaryError(true))
        }
    }
}
