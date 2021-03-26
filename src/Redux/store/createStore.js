import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from '../Reducers/userReducer'
import postsReducer from '../Reducers/postsReducer'
import dataReducer from '../Reducers/dataReducer'
import { createFilter, createBlacklistFilter } from 'redux-persist-transform-filter';


const middleware = [thunk]

const saveSubsetBlacklistFilter = createBlacklistFilter(
    'user',
    ['OnlineUsers']
  );

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    user: userReducer,
    infos:dataReducer,
    data: postsReducer,
    
    
})
const persistedReducer = persistReducer(persistConfig, reducers)

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(...middleware))

export default () => {
    let store = createStore(persistedReducer, enhancer)
    let persistor = persistStore(store,{
        transforms: [
          saveSubsetBlacklistFilter  
        ]
      })

    return { store, persistor }
}
