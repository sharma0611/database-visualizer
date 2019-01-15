import type {
    UpdateVariableAction,
    HasErroredAction,
    IsLoadingAction,
    FetchSuccessAction
} from '../Types'

// update action
export function updateVariable(variable): UpdateVariableAction {
    return {
        type: 'UPDATE_VARIABLE',
        variable
    }
}

// error action
export function summaryError(bool): HasErroredAction {
    return {
        type: 'HAS_ERRORED',
        hasErrored: bool
    }
}

// loading action
export function summaryIsLoading(bool): IsLoadingAction {
    return {
        type: 'IS_LOADING',
        isLoading: bool
    }
}

// success action
export function summaryFetchSuccess(summaryData): FetchSuccessAction {
    return {
        type: 'FETCH_SUCCESS',
        summaryData
    }
}
