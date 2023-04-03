import * as React from 'react';
import {useForm} from 'react-hook-form'
import {useQuery} from "@tanstack/react-query";
import type {DocumentData} from "firebase/firestore";
import type {Book} from "../../type";
import {getAuthor, saveBook} from "../../api/Firebase";

const CreateReview = (): JSX.Element => {
  const {register, handleSubmit} = useForm<Book>()

  const {data: snapshot} = useQuery({
    queryKey: ["CreateReview"],
    queryFn: getAuthor,
  })

  const onSubmit = (b: Book) => {
    saveBook(b);
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <label aria-hidden="true">Title</label>
        <input type="text" placeholder="title"
               required {...register('title', {required: 'Title is required'})}></input><br/>

        <label aria-hidden="true">Series</label>
        <input type="text" {...register('series')}></input>

        <label aria-hidden="true">Number</label>
        <input type="number"{...register('number')}></input>

        <label aria-hidden="true">Book Type</label>
        <select {...register('bookType')}>
          <option value="ebook">EBook</option>
          <option value="audio">Audio</option>
          <option value="print">Print</option>
        </select>

        <label aria-hidden="true">Genre</label>
        <select required {...register('genre')}>
          <option value="scifi">Science Fiction</option>
          <option value="fantasy">Fantasy</option>
        </select>

        <label aria-hidden="true">Author</label>
        <select required {...register('authorId')}>
          {snapshot && snapshot.docs.map((doc: DocumentData) => <option
            value={doc.id}>{doc.data().firstName} {doc.data().lastName}</option>)}
        </select>

        <br/>

        <input type="text"
               {...register('review')}></input>
        <label aria-hidden="true">Review with out spoilers</label>
        <input type="text"
               {...register('review')}></input>

        <input type="text"
               {...register('review')}></input>
        <label aria-hidden="true">Review with spoilers</label>
        <input type="text"
               {...register('spoilerReview')}></input>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateReview;