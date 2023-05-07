import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentsList: [],
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(eachItem => eachItem.id !== id),
    })
  }

  onAddComment = event => {
    const {name, comment} = this.state
    event.preventDefault()

    const randValue = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )
    const initialClassName = initialContainerBackgroundClassNames[randValue]

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      initialClassName,
      date: new Date(),
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  enterName = event => {
    this.setState({name: event.target.value})
  }

  enterComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, commentsList} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div>
            <h1 className="heading">Comments</h1>
            <p className="description">Say something about 4.0 Technologies</p>
            <form onSubmit={this.onAddComment}>
              <input
                type="text"
                placeholder="Your Name"
                className="name-input"
                onChange={this.enterName}
                value={name}
              />
              <br />
              <textarea
                placeholder="Your Comment"
                className="text-element"
                onChange={this.enterComment}
                value={comment}
              >
                h
              </textarea>
              <br />
              <button type="submit">Add Comment</button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>

        <div className="comments-container">
          <p>
            <span className="count">{commentsList.length}</span> Comments
          </p>
          <ul className="list-container">
            {commentsList.map(each => (
              <CommentItem
                commentDetails={each}
                key={each.id}
                toggleIsLiked={this.toggleIsLiked}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
