import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store'
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from './types'

const fetchCommentSuccess = (comments: []) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  }
}

const fetchCommentFailure = (error: unknown) => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: error,
  }
}

const fetchCommentRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST,
  }
}

export const fetchComments = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return dispatch => {
    dispatch(fetchCommentRequest())
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(comments => dispatch(fetchCommentSuccess(comments)))
      .catch(error => dispatch(fetchCommentFailure(error)))
  }
}
