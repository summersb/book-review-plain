import * as React from 'react';
import {useForm} from "react-hook-form";
import type {Author} from "../../type";
import {saveAuthor} from "../../api/Firebase";

const CreateAuthor = (): JSX.Element => {
  const {register, handleSubmit} = useForm<Author>()

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
                 required {...register('firstName', {required: 'Name is required'})}></input>

          <label aria-hidden="true">Last Name</label>
          <input type="text" placeholder="name"
                 required {...register('lastName', {required: 'Name is required'})}></input>

          <label></label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAuthor;