import * as React from 'react';
import {getAuthorBooks} from "../../api/Firebase";
import {useQuery} from "@tanstack/react-query";

const ReviewList = (): JSX.Element => {

  const {data: reviewList} = useQuery({
    queryKey: ["BookReview"],
    queryFn: getAuthorBooks,
  })

  return (
    <div>
      List of reviews
      <ul>
        {reviewList && reviewList.docs.map(d => d.data()).map(d => <li>
          <span>{d.title}</span> <span>{d.review}</span> <span>{d.genre}</span></li>)}
      </ul>
    </div>
  );
};

export default ReviewList;