import { useAppDispatch, useAppSelector } from '../hooks'
import { addSubscriber } from '../redux'

const Subscribers: React.FC = () => {
  const { count } = useAppSelector(state => state.subscribers)
  const dispatch = useAppDispatch()
  return (
    <>
      <div className="items">
        <h2>구독자 수 : {count}</h2>
        <button onClick={() => dispatch(addSubscriber())}>구독하기</button>
      </div>
    </>
  )
}

export default Subscribers
