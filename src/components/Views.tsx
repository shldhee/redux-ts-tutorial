import { connect } from 'react-redux'
import { ViewsState } from '../types'
import { addView } from '../redux'
import { useCallback, useState } from 'react'

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const Views: React.FC<Props> = ({ count, addView }: Props) => {
  const [number, setNumber] = useState<number>(1)
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value))
  }, [])
  return (
    <>
      <div className="items">
        <h2>조회수 : {count}</h2>
        <input type="number" value={number} onChange={handleChange} />
        <button onClick={() => addView(number)}>조회하기</button>
      </div>
    </>
  )
}

const mapStateToProps = ({ views }: { views: ViewsState }) => {
  return {
    count: views.count,
  }
}

const mapDispatchToProps = {
  addView: (number: number) => addView(number),
}

export default connect(mapStateToProps, mapDispatchToProps)(Views)
