import { connect } from 'react-redux'
import { RootState } from '../types'

type Props = ReturnType<typeof mapStateToProps>

const Display: React.FC<Props> = ({ count }) => {
  return (
    <div>
      <h2>구독자 수 : {count}</h2>
    </div>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    count: state.subscribers.count,
  }
}

export default connect(mapStateToProps)(Display)
