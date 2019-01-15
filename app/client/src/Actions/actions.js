// update action
export function updateVariable(variable) {
    return {
        type: 'UPDATE_VARIABLE',
        variable
    }
}

// error action
export function summaryError(bool) {
    return {
        type: 'HAS_ERRORED',
        hasErrored: bool
    }
}

// loading action
export function summaryIsLoading(bool) {
    return {
        type: 'IS_LOADING',
        isLoading: bool
    }
}

// success action
export function summaryFetchSuccess(summaryData) {
    return {
        type: 'FETCH_SUCCESS',
        summaryData
    }
}
