import { ViewsAction, ViewsState } from '../../types'
import { ADD_VIEW } from './types'

const initialState: ViewsState = {
  count: 0,
}

const viewsReducer = (state = initialState, action: ViewsAction) => {
  switch (action.type) {
    case ADD_VIEW:
      return {
        ...state,
        count: state.count + action.payload,
      }
    default:
      return state
  }
}

export default viewsReducer
