import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import configureStore from './Store'

// types
import type { Store, State } from './types'

const initialState: State = {
    variable: '',
    hasErrored: false,
    isLoading: false,
    summaryData: null
}

const store: Store = configureStore(initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
