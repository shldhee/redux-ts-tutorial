import { combineReducers } from 'redux'
import subscribersReducer from './subscribers/reducer'
import viewsReducer from './views/reducer'

const rootReducer = combineReducers({
  subscribers: subscribersReducer,
  views: viewsReducer,
})

export default rootReducer
