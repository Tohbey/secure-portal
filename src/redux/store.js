import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers} from 'redux'


const rootReducer = combineReducers({

})

const configureStore = () =>  createStore(rootReducer, applyMiddleware(thunk))

export default configureStore;