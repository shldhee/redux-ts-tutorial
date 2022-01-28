import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchComments } from '../redux'

const Comments: React.FC = () => {
  const { items, loading } = useAppSelector(state => state.comments)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchComments())
  }, [fetchComments])
  const commentsItems = loading ? (
    <div>is loading....</div>
  ) : (
    items.map(
      (comment: { id: string; name: string; email: string; body: string }) => (
        <div key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ),
    )
  )
  return (
    <>
      <div className="comments">{commentsItems}</div>
    </>
  )
}

export default Comments
