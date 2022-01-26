import { connect } from 'react-redux'
import { SubscribersState } from '../types'

const Subscribers: React.FC<SubscribersState> = ({ count }) => {
  return (
    <>
      <div className='items'>
        <h2>구독자 수 : {count}</h2>
        <button>구독하기</button>
      </div>
    </>
  )
}

const mapstateToProps = (state: SubscribersState) => {
  return {
    count: state.count,
  }
}

export default connect(mapstateToProps)(Subscribers)
