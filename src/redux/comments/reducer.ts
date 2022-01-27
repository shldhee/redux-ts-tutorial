// import { CommentsAction } from '../../types'
import { AnyAction } from 'redux'

import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from './types'

const initialState = {
  items: [],
  loading: false,
  err: null,
}

const commentsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      }
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        err: action.payload,
      }
    default:
      return state
  }
}

export default commentsReducer
