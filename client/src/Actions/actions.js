//@flow
import type {
    UpdateVariableAction,
    HasErroredAction,
    IsLoadingAction,
    FetchSuccessAction,
    Variable,
    HasErrored,
    IsLoading,
    SummaryData
} from '../Types/summary'

// update action
export function updateVariableAction(variable: Variable): UpdateVariableAction {
    return {
        type: 'UPDATE_VARIABLE',
        variable
    }
}

// error action
export function hasErroredAction(bool: HasErrored): HasErroredAction {
    return {
        type: 'HAS_ERRORED',
        hasErrored: bool
    }
}

// loading action
export function isLoadingAction(bool: IsLoading): IsLoadingAction {
    return {
        type: 'IS_LOADING',
        isLoading: bool
    }
}

// success action
export function fetchSuccessAction(summaryData: SummaryData): FetchSuccessAction {
    return {
        type: 'FETCH_SUCCESS',
        summaryData
    }
}
