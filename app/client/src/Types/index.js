// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'

import type { SummaryState, SummaryAction } from './summary'

export type ReduxInitAction = { type: '@@INIT' }

export type State = SummaryState

export type Action = ReduxInitAction | SummaryAction

export type Store = ReduxStore<State, Action>

export type RawDispatch = ReduxDispatch<Action>

type GetState = () => State
type PromiseAction = Promise<Action>
export type ThunkAction = (dispatch: RawDispatch, getState: GetState) => any

export type DispatchWithThunk = (
    action: Action | ThunkAction | PromiseAction | Array<Action>
) => any
