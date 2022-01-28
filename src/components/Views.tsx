import { addView } from '../redux'
import { useCallback, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'

const Views: React.FC = () => {
  const [number, setNumber] = useState<number>(1)

  const { count } = useAppSelector(state => state.views)
  const dispatch = useAppDispatch()

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value))
  }, [])
  return (
    <>
      <div className="items">
        <h2>조회수 : {count}</h2>
        <input type="number" value={number} onChange={handleChange} />
        <button onClick={() => dispatch(addView(number))}>조회하기</button>
      </div>
    </>
  )
}

export default Views
