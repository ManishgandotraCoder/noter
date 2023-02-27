import { combineReducers } from 'redux'
import dashboard from './dashboard.reducers'

const rootReducer = combineReducers({
    dashboard : dashboard
});

export default rootReducer;