import React, {useEffect, useState} from 'react';
import { Rating } from 'semantic-ui-react';

const Reviews = ({totalReviews}) => {

  const [bookRating, setBookRating] = useState(0);

  useEffect(() => {
    if(totalReviews.length > 0){
      const rating = averageRating(totalReviews);
      setBookRating(rating);
    } else {
      setBookRating(0);
    }
  },[totalReviews]);

  const averageRating = (input) => {
    let sum = 0;
    input.forEach(num => {
       sum += num.ratings;
   });
   return sum / input.length
  }

  return (
    <>
      <Rating maxRating={5} rating={bookRating} icon='star' disabled/>
    </>
  )}
export default Reviews;
