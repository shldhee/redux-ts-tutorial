import { useAppSelector } from '../hooks'
const Display: React.FC = () => {
  const { count } = useAppSelector(state => state.subscribers)
  return (
    <div>
      <h2>구독자 수 : {count}</h2>
    </div>
  )
}

export default Display
