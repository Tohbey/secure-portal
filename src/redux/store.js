import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { UserReducer } from './reducers/user';
import { AuthReducer } from './reducers/auth';

const rootReducer = combineReducers({
    user: UserReducer, 
    auth: AuthReducer
})

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk))

export default configureStore;