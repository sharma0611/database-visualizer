// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'

import type { SummaryState, SummaryAction } from './summary'

export type ReduxInitAction = { type: '@@INIT' }

export type State = SummaryState

export type Action = ReduxInitAction | SummaryAction

export type Store = ReduxStore<State, Action>

export type Dispatch = ReduxDispatch<Action>
