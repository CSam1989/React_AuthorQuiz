import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IAuthor } from '../../interfaces/reducers.types';
import { initialState } from '../../redux/reducers/initialState';
import CreateForm from '../create-form/CreateForm.component';
import './Create.styles.scss';



const Create = (props: RouteComponentProps<any>) => {
  const addToAuthors = (formValues: IAuthor) => {
    const items = window.localStorage.getItem('authors');
    const authors: IAuthor[] = items ? JSON.parse(items) : [];
    authors.push(formValues);
    window.localStorage.setItem('authors', JSON.stringify(authors));
  };

  const initialFormValues: IAuthor = initialState.turndata.author;
  return (
    <>
      <h1>Add Author</h1>
      <CreateForm
        initialValues={initialFormValues}
        handleSubmit={addToAuthors}
        {...props}
      />
    </>
  );
};

export default Create;
