import { connect } from 'react-redux'
import { RootState } from '../redux/store'
import { addSubscriber } from '../redux'

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

const mapStateToProps = (state: RootState) => {
  console.log(state)
  // {subscribers: {…}, views: {…}}subscribers: {count: 370}views: {count: 0}[[Prototype]]: Object
  return {
    count: state.subscribers.count,
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
