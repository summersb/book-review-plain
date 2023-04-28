import * as React from 'react';
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {useQuery} from "@tanstack/react-query";
import type {DocumentData} from "firebase/firestore";
import type {Book} from "../../type";
import {getAuthor, saveBook} from "../../api/Firebase";

const CreateReview = (): JSX.Element => {
  const {register, formState: {errors}, handleSubmit} = useForm<Book>()
  const navigate = useNavigate();

  const {data: snapshot} = useQuery({
    queryKey: ["CreateReview"],
    queryFn: getAuthor,
  })

  const onSubmit = (b: Book) => {
    saveBook(b)
    .then(() => {
      navigate({pathname: "/review"})
    })
  }

  console.log(errors)
  return (
    <div style={{display: "block"}}>
      <h3>Create Review</h3>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
          <label aria-hidden="true">Title</label>
          <input type="text" placeholder="title"
                 required {...register('title', {required: true})} />
          {errors?.title && <p key="title">{errors.title.message}</p>}

          <label aria-hidden="true">Series</label>
          <input type="text" {...register('series')}></input>
          {errors?.series && <p key="series">{errors.series.message}</p>}

          <label aria-hidden="true">Number</label>
          <input type="number" {...register('number')}></input>

          <label aria-hidden="true">Book Type</label>
          <select {...register('bookType')}>
            <option key="ebook" value="EBook">EBook</option>
            <option key="audio" value="Audio">Audio</option>
            <option key="print" value="Print">Print</option>
          </select>

          <label aria-hidden="true">Genre</label>
          <select required {...register('genre')}>
            <option value="" disabled selected>Select an genre</option>
            <option value="SciFi">Science Fiction</option>
            <option value="Fantasy">Fantasy</option>
          </select>

          <label aria-hidden="true">Author</label>
          <select required {...register('authorId')}>
            <option value="" disabled selected>Select an author</option>
            {snapshot && snapshot.docs.map((doc: DocumentData, idx: number) => <option
              key={idx} value={doc.id}>{doc.data().firstName} {doc.data().lastName}</option>)}
          </select>

          <label aria-hidden="true">Review with out spoilers</label>
          <textarea rows={10} cols={50}
                    {...register('review')}></textarea>

          <label aria-hidden="true">Review with spoilers</label>
          <textarea rows={10} cols={50}
                    {...register('spoilerReview')}></textarea>

          <label></label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default CreateReview;