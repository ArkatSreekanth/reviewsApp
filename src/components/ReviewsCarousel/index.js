import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {
    reviewId: 0,
  }

  moveToNextReview = () => {
    const {reviewId} = this.state
    const {reviewsList} = this.props
    const reviewLastId = reviewsList.length - 1

    if (reviewLastId > reviewId) {
      this.setState(prevState => ({reviewId: prevState.reviewId + 1}))
    }
  }

  moveToPreviousReview = () => {
    const {reviewId} = this.state

    if (reviewId > 0) {
      this.setState(prevState => ({reviewId: prevState.reviewId - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {reviewId} = this.state

    return (
      <div className="carousel-bg-container">
        <h1 className="reviews-heading">Reviews</h1>
        <div className="review-container">
          <button
            className="carousel-btn"
            type="button"
            data-testid="leftArrow"
            onClick={this.moveToPreviousReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>

          <div className="review-details">
            <img
              src={reviewsList[reviewId].imgUrl}
              alt={reviewsList[reviewId].username}
              className="arrow"
            />
            <p className="user-name">{reviewsList[reviewId].username}</p>
            <p>{reviewsList[reviewId].companyName}</p>
            <p className="description">{reviewsList[reviewId].description}</p>
          </div>
          <button
            className="carousel-btn"
            type="button"
            data-testid="rightArrow"
            onClick={this.moveToNextReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
