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
      <table>
        <thead>
        <tr>
          <th>Id</th>
          <th>First name</th>
          <th>Last Name</th>
        </tr>
        </thead>
        <tbody>
        {reviewList && reviewList.docs.map(d => ({id: d.id, data: d.data()}))
        .map(d => <tr key={d.id}>
          <td>{d.id}</td>
          <td>{d.data.firstName}</td>
          <td>{d.data.lastName}</td>
        </tr>)
        }
        </tbody>
      </table>
    </div>
  );
};

export default AuthorList;