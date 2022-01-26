import { SubscribersAction, SubscribersState } from '../../types'
import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from './types'

const initialState: SubscribersState = {
  count: 370,
}

const subscribersReducer = (
  state = initialState,
  action: SubscribersAction
) => {
  switch (action.type) {
    case ADD_SUBSCRIBER:
      return {
        ...state,
        count: state.count + 1,
      }
    case REMOVE_SUBSCRIBER:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}

export default subscribersReducer
