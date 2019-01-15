// @flow

// state
export type SummaryRow = {
    value: string,
    count: number,
    averageAge: number
}

export type SummaryData = {
    data?: Array<SummaryRow>,
    omitted?: number
}

export type Variable = string
export type HasErrored = boolean
export type IsLoading = boolean

export type SummaryState = {
    +variable: Variable,
    +hasErrored: HasErrored,
    +isLoading: IsLoading,
    +summaryData: SummaryData
}

// actions
export type UpdateVariableAction = { type: 'UPDATE_VARIABLE', +variable: string }
export type HasErroredAction = { type: 'HAS_ERRORED', +hasErrored: boolean }
export type IsLoadingAction = { type: 'IS_LOADING', +isLoading: boolean }
export type FetchSuccessAction = { type: 'FETCH_SUCCESS', +summaryData: SummaryData }

export type SummaryAction =
    | UpdateVariableAction
    | HasErroredAction
    | IsLoadingAction
    | FetchSuccessAction
