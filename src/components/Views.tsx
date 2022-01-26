import { connect } from 'react-redux'
import { ViewsState } from '../types'
import { addSubscriber } from '../redux'

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const Views: React.FC<Props> = ({ count, addSubscriber }) => {
  return (
    <>
      <div className='items'>
        <h2>구독자 수 : {count}</h2>
        <button onClick={() => addSubscriber()}>구독하기</button>
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
  addSubscriber,
}

export default connect(mapStateToProps, mapDispatchToProps)(Views)
