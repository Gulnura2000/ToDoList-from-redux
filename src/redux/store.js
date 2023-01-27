import {applyMiddleware, legacy_createStore as createStore  } from 'redux'
import rootReducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialstate = {

}


const store = createStore(rootReducer(), initialstate ,composeWithDevTools(applyMiddleware (thunk)))

export default store