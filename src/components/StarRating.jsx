import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

function  StarRating() {
  const [ratingValue, setRatingValue] = useState(0)
  const handleRating = (rate) => {
    setRatingValue(rate)
  }
  return (
    <Rating onClick={handleRating}
        size={30}

  />
  )
}
export default StarRating