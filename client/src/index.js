//@flow
import React from 'react'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from './Store'

// types
import type { Store, State } from './types'

export const initialState: State = {
    variable: '',
    hasErrored: false,
    isLoading: false,
    summaryData: {}
}

const store: Store = configureStore(initialState)
const element = document.getElementById('root')
if (!element) {
    throw new Error("couldn't find element with id root")
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    element
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
