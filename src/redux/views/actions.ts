import { ADD_VIEW } from './types'

export const addView = (number: number) => {
  return {
    type: ADD_VIEW,
    payload: number,
  }
}
