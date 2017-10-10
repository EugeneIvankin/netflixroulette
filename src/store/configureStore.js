import { createStore }  from 'redux'
import rootReducer from '../reducer'

export default function configureStore(initialState) {

    const store = createStore(rootReducer, initialState)

    if (module.hot) {
        module.hot.accept('../reducer', () => {
            const nextRootReducer = require('../reducer')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}