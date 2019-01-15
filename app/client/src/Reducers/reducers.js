export function variable(state = '', action) {
    switch (action.type) {
        case 'UPDATE_VARIABLE':
            return action.variable
        default:
            return state
    }
}

export function hasErrored(state = false, action) {
    switch (action.type) {
        case 'HAS_ERRORED':
            return action.hasErrored
        default:
            return state
    }
}

export function isLoading(state = false, action) {
    switch (action.type) {
        case 'IS_LOADING':
            return action.isLoading
        default:
            return state
    }
}

export function summaryData(state = [], action) {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return action.summaryData
        default:
            return state
    }
}
