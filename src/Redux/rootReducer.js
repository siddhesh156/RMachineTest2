import { combineReducers } from 'redux'

import dashboardReducer from './Dashboard/dashboardReducer'






const rootReducer = combineReducers({
   
    dashboard: dashboardReducer,
    
})

export default rootReducer