//@flow
import {
    updateVariableAction,
    hasErroredAction,
    isLoadingAction,
    fetchSuccessAction
} from './actions'

// types
import type { ThunkAction, RawDispatch } from '../Types'
import type { Variable } from '../Types/summary'

// action creator for API call
export function fetchSummaryData(variable: Variable): ThunkAction {
    return async (dispatch: RawDispatch) => {
        dispatch(updateVariableAction(variable))
        dispatch(isLoadingAction(true))
        try {
            const response = await fetch('/api/stats/' + variable)
            if (response.status < 200 || response.status > 299) {
                throw Error(response.statusText)
            }
            var body = await response.json()
            dispatch(fetchSuccessAction(body))
            dispatch(isLoadingAction(false))
        } catch (e) {
            dispatch(hasErroredAction(true))
        }
    }
}
