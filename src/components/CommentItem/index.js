// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteComment} = props

  const {id, name, comment, initialClassName, date, isLiked} = commentDetails

  const likeClassName = isLiked ? 'like-active' : 'like'
  const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLike = () => {
    toggleIsLiked(id)
  }

  const onClickDelete = () => {
    deleteComment(id)
  }

  return (
    <li className="list-container">
      <div className="description-container">
        <p className={`initial-color ${initialClassName}`}>{name[0]}</p>
        <h1>{name}</h1>
        <p className="time">{formatDistanceToNow(date)} ago</p>
      </div>
      <p className="comment-description">{comment}</p>
      <div className="like-container">
        <div className="l-container">
          <button type="button" className="like-btn" onClick={onClickLike}>
            <img src={imageUrl} alt="like" />
          </button>
          <p className={likeClassName}>Like</p>
        </div>
        <div className="del-container">
          <button
            type="button"
            className="del-btn"
            onClick={onClickDelete}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
