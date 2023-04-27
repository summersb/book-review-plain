import * as React from 'react';
import {useForm} from "react-hook-form";
import type {Author} from "../../type";
import {saveAuthor} from "../../api/Firebase";

const CreateAuthor = (): JSX.Element => {
  const {register, handleSubmit, formState: {errors}} = useForm<Author>()

  const onSubmit = (d: Author) => {
    saveAuthor(d);
  }

  return (
    <div style={{display: "block"}}>
      <h3>Add Author</h3>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
          <label aria-hidden="true">First Name</label>
          <input type="text" placeholder="name"
                 required {...register('firstName', {required: true})}></input>

          <label aria-hidden="true">Last Name</label>
          <input type="text" placeholder="name"
                 required {...register('lastName', {required: true})}></input>

          <label></label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAuthor;