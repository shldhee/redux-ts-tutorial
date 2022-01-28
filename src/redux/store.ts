import { createStore, applyMiddleware, AnyAction } from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [logger, thunk]
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export type RootState = ReturnType<typeof rootReducer>
// export type AppDispatch = typeof store.dispatch
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>

export default store
