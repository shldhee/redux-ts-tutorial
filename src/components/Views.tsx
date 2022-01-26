import { connect } from 'react-redux'
import { ViewsState } from '../types'
import { addView } from '../redux'

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const Views: React.FC<Props> = ({ count, addView }) => {
  return (
    <>
      <div className='items'>
        <h2>조회수 : {count}</h2>
        <button onClick={() => addView()}>조회하기</button>
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
  addView,
}

export default connect(mapStateToProps, mapDispatchToProps)(Views)
