import React, {useEffect, useState} from 'react';
import { Rating } from 'semantic-ui-react';

const Reviews = ({totalReviews}) => {

  const [bookRating, setBookRating] = useState(0);
  useEffect(() => {
    caluclateTotalReviews();
  },[totalReviews])

  const caluclateTotalReviews = () => {
    if(totalReviews.length > 0){

      const rating = averageRating(totalReviews);
      setBookRating(rating);
    } else {
      setBookRating(0);
    }
  }


  function averageRating(array) {
    let sum = 0;
    array.forEach(num => {
       sum += num.ratings;
   });
   return sum / array.length
  }
  return (
    <>
      <Rating maxRating={5} rating={bookRating} icon='star' disabled/>
    </>
  )

}
export default Reviews;
