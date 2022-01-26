import { ComponentType, useEffect } from 'react'
import { connect, Matching } from 'react-redux'
import { fetchComments } from '../redux'
import { RootState } from '../redux/store'

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const Comments: ComponentType<
  Matching<{ comments: never[] } & { fetchComments: () => void }, Props>
> = ({ fetchComments }) => {
  useEffect(() => {
    fetchComments()
  }, [])
  return (
    <>
      <div className='items'></div>
    </>
  )
}

const mapStateToProps = ({ comments }: { comments: RootState['comments'] }) => {
  return {
    comments: comments.items,
  }
}

const mapDispatchToProps = {
  fetchComments,
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
