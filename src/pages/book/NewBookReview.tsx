import React from 'react';
import {useForm} from "react-hook-form";

const NewBookReview = () => {
  const {register, handleSubmit} = useForm()
  const onSubmit = (d) => {

  }

  return (
      <div className="review">
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
          <label>New Book Review</label>
          <input type="text" placeholder="author's name"
                 required {...register('name', {required: 'Author name is required'})}></input>
          <input type="text" placeholder="title"
                 required {...register('title', {required: 'Title is required'})}></input>
          <input type="text" placeholder="series"
                 required {...register('series')}></input>
          <input type="text" placeholder="description"
                 required {...register('description')}></input>

        </form>
        <p>Author</p>
        <p>Title</p>
        <p>Series</p>
        <p>Description</p>
      </div>
  );
};

export default NewBookReview;