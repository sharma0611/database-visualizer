//@flow
import type { Action } from '../Types'
import type { Variable, HasErrored, IsLoading, SummaryData } from '../Types/summary'

export function variable(state: Variable = '', action: Action) {
    switch (action.type) {
        case 'UPDATE_VARIABLE':
            return action.variable
        default:
            return state
    }
}

export function hasErrored(state: HasErrored = false, action: Action) {
    switch (action.type) {
        case 'HAS_ERRORED':
            return action.hasErrored
        default:
            return state
    }
}

export function isLoading(state: IsLoading = false, action: Action) {
    switch (action.type) {
        case 'IS_LOADING':
            return action.isLoading
        default:
            return state
    }
}

export function summaryData(state: SummaryData = {}, action: Action) {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return action.summaryData
        default:
            return state
    }
}
