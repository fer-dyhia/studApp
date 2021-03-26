import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import createStore from './Redux/store/createStore'
import { PersistGate } from 'redux-persist/integration/react'

import reportWebVitals from './reportWebVitals'
const { store , persistor } = createStore();
ReactDOM.render(
    
    <Provider store={store}>
        <PersistGate loading={<div>loading</div>} persistor={persistor}>
        <React.StrictMode>
        <App />
    </React.StrictMode>,
        </PersistGate>
        

    </Provider>,
     document.getElementById('root')
    
)

reportWebVitals()
