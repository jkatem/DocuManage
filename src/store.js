import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import matterReducer from './redux/reducers/matterReducer'
import tasksReducer from './redux/reducers/tasksReducer'

const reducer = combineReducers({
    matterReducer,
    tasksReducer,
})


const store = createStore(
    reducer, 
    compose(applyMiddleware(thunk), composeWithDevTools())
)

export default store