import * as React from 'react'
import {DocumentData, DocumentReference} from 'firebase/firestore'
import {useQuery, useQueryClient} from "@tanstack/react-query"
import {deleteAuthor, getAuthor} from "../../api/Firebase"

const AuthorList = (): JSX.Element => {
  const queryClient = useQueryClient()

  const {data: reviewList} = useQuery({
    queryKey: ["Author"],
    queryFn: getAuthor,
  })

  const deleteDocument = (doc: DocumentReference<DocumentData>): void => {
    deleteAuthor(doc)
    .then(() => {
      // invalidate query
      queryClient.invalidateQueries({queryKey: ["Author"]})
    })
  }


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
        {reviewList && reviewList.docs.map(d => ({id: d.id, data: d.data(), doc: d}))
        .map(d => <tr key={d.id}>
          <td>{d.id}</td>
          <td>{d.data.firstName}</td>
          <td>{d.data.lastName}</td>
          <td>
            <button onClick={() => deleteDocument(d.doc.ref)}>Delete</button>
          </td>
        </tr>)
        }
        </tbody>
      </table>
    </div>
  );
};

export default AuthorList;