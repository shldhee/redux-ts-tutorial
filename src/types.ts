import store from './redux/store'
import { addSubscriber, removeSubscriber } from './redux/subscribers/actions'
import { addView } from './redux/views/actions'

export type SubscribersState = {
  count: number
  // addSubscriber: typeof addSubscriber
}

// {
// type CounterAction =
//   | ReturnType<typeof increase>
//   | ReturnType<typeof decrease>
//   | ReturnType<typeof increaseBy>;
// type test = typeof addSubscriber
// type test1 = ReturnType<typeof addSubscriber>
// action: ReturnType<typeof getCheckSessionAsync.request>
// }

export type SubscribersAction =
  | ReturnType<typeof addSubscriber>
  | ReturnType<typeof removeSubscriber>

export type AppDispatch = typeof store.dispatch

export type ViewsState = {
  count: number
}
export type ViewsAction = ReturnType<typeof addView>

export interface RootState {
  subscribers: SubscribersState
  views: ViewsState
}
