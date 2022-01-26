import { connect } from 'react-redux'
import { SubscribersState } from '../types'
import { addSubscriber } from '../redux/subscribers/actions'

// interface Props {
//   count: number
//   addSubscriber: () => AppDispatch
// }

// type Props = ReturnType<typeof mapStateToProps> &
//   ReturnType<typeof mapDispatchToProps> & {
//     label: string;
//   };

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const Subscribers: React.FC<Props> = ({ count, addSubscriber }) => {
  return (
    <>
      <div className='items'>
        <h2>구독자 수 : {count}</h2>
        <button onClick={() => addSubscriber()}>구독하기</button>
      </div>
    </>
  )
}

const mapStateToProps = (state: SubscribersState) => {
  return {
    count: state.count,
  }
}

// const mapDispatchToProps = (dispatch: Dispatch<SubscribersAction>) => {
//   return {
//     addSubscriber: () => dispatch(addSubscriber()),
//   }
// }
const mapDispatchToProps = {
  addSubscriber,
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers)
