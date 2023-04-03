import * as React from 'react';
import {useEffect, useState} from 'react';
import {getAuthorBooks} from "../../api/Firebase";

const ReviewList = (): JSX.Element => {
  const [reviewList, setReviewList] = useState<any>();
  useEffect(() => {
    getAuthorBooks().then(snapshot => setReviewList(snapshot))
  }, []);

  if (reviewList) {
    reviewList.forEach(d => {
      console.log(d.data())
    })
  }

  return (
    <div>
      List of reviews
      <ul>
        {reviewList && reviewList.docs.map(d => d.data()).map(d => <li>
          <span>{d.title}</span><span>{d.review}</span><span>{d.genre}</span></li>)}
      </ul>
    </div>
  );
};

export default ReviewList;