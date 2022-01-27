import { ComponentType, useEffect } from 'react'
import { connect, Matching } from 'react-redux'
import { fetchComments } from '../redux'
import { RootState } from '../redux/store'

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const Comments: ComponentType<
  Matching<
    { comments: never[]; loading: boolean } & { fetchComments: () => void },
    Props
  >
> = ({
  comments,
  loading,
  fetchComments,
}: Matching<
  { comments: never[]; loading: boolean } & { fetchComments: () => void },
  Props
>) => {
  useEffect(() => {
    fetchComments()
  }, [fetchComments])
  const commentsItems = loading ? (
    <div>is loading....</div>
  ) : (
    comments.map(
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

const mapStateToProps = ({ comments }: { comments: RootState['comments'] }) => {
  return {
    comments: comments.items,
    loading: comments.loading,
  }
}

const mapDispatchToProps = {
  fetchComments,
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
