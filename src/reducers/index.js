import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import common from './common_reducer'
const appReducer = combineReducers({
    form: formReducer,
    common
})

export default appReducer