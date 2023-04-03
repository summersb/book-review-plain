import * as React from 'react';
import {useForm} from "react-hook-form";
import type {Author} from "../../type";
import {saveAuthor} from "../../api/Firebase";

const CreateAuthor = (): JSX.Element => {
  const {register, handleSubmit} = useForm<Author>()

  const onSubmit = (d: Author) => {
    saveAuthor(d);
    // d.name
  }

  return (
    <div className="form">
      <h3>Add Author</h3>
      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <label aria-hidden="true">First Name</label>
        <input type="text" placeholder="name"
               required {...register('firstName', {required: 'Name is required'})}></input><br/>

        <label aria-hidden="true">Last Name</label>
        <input type="text" placeholder="name"
               required {...register('lastName', {required: 'Name is required'})}></input><br/>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateAuthor;