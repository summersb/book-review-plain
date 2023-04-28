import * as React from 'react'
import {useContext} from 'react'
import {DocumentData, DocumentReference} from "firebase/firestore"
import {useQuery, useQueryClient} from "@tanstack/react-query"
import {deleteBook, getAuthorBooks} from "../../api/Firebase"
import {UserContext} from "../../contexts/AuthProvider"

const ReviewList = (): JSX.Element => {
  const user = useContext(UserContext)
  const queryClient = useQueryClient()

  const {data: reviewList} = useQuery({
    queryKey: ["BookReview"],
    queryFn: getAuthorBooks,
  })

  const deleteDocument = (doc: DocumentReference<DocumentData>): void => {
    deleteBook(doc)
    .then(() => {
      // invalidate query
      queryClient.invalidateQueries({queryKey: ["BookReview"]})
    })
  }

  return (
    <div>
      {user.currentUser != null && (<>
        List of reviews
        <table>
          <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {reviewList && reviewList.docs.map(d => ({id: d.id, data: d.data(), doc: d}))
          .map(d => <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.data.title}</td>
            <td>{d.data.genre}</td>
            <td>
              <button onClick={() => deleteDocument(d.doc.ref)}>Delete</button>
            </td>
          </tr>)
          }
          </tbody>
        </table>
      </>)}
    </div>
  );
};

export default ReviewList;