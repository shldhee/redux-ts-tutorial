import store from './redux/store'
import { addSubscriber, removeSubscriber } from './redux/subscribers/actions'

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
