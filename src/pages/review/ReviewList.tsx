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
      <table>
        <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Genre</th>
        </tr>
        </thead>
        <tbody>
        {reviewList && reviewList.docs.map(d => ({id: d.id, data: d.data()}))
        .map(d => <tr key={d.id}>
          <td>{d.id}</td>
          <td>{d.data.title}</td>
          <td>{d.data.genre}</td>
        </tr>)
        }
        </tbody>
      </table>
    </div>
  );
};

export default ReviewList;