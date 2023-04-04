import * as React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getAuthor} from "../../api/Firebase";

const AuthorList = (): JSX.Element => {

  const {data: reviewList} = useQuery({
    queryKey: ["Author"],
    queryFn: getAuthor,
  })

  return (
    <div>
      List of Authors
      <ul>
        {reviewList && reviewList.docs.map(d => d.data()).map(d => <li>
          <span>{d.firstName}</span> <span>{d.lastName}</span></li>)}
      </ul>
    </div>
  );
};

export default AuthorList;