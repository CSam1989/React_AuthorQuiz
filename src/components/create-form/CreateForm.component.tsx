import {
  InputAdornment,
  ButtonGroup,
  Button,
  TextField,
  IconButton,
} from '@material-ui/core';
import { AddCircle, Delete } from '@material-ui/icons';
import { Formik, FieldArray } from 'formik';

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IAuthor } from '../../interfaces/reducers.types';
import { CreateAuthorSchema } from './CreateForm.validation';

export interface CreateFormProps extends RouteComponentProps<any> {
  initialValues: IAuthor;
  handleSubmit(formvalues: IAuthor): void;
}

const CreateForm = ({
  initialValues,
  handleSubmit,
  history,
}: CreateFormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CreateAuthorSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      {({
        errors,
        touched,
        values,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} className='create-form'>
          <div>
            <TextField
              label='Name'
              name='name'
              className='inputfield'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.name && touched.name}
              helperText={!!errors.name && touched.name && errors.name}
            />
          </div>
          <div>
            <TextField
              error={!!errors.imageUrl && touched.imageUrl}
              label='Image Url'
              name='imageUrl'
              className='inputfield'
              value={values.imageUrl}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                !!errors.imageUrl && touched.imageUrl && errors.imageUrl
              }
            />
          </div>
          <FieldArray name='books'>
            {({ remove, push }) => (
              <>
                {values.books.length > 0 &&
                  values.books.map((book, i) => (
                    <div key={i}>
                      <TextField
                        error={!!errors.books?.[i] && touched.books}
                        label={`Book ${i + 1}`}
                        name={`books.${i}`}
                        value={book}
                        className='inputfield'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          !!errors.books?.[i] &&
                          touched.books &&
                          errors.books?.[i]
                        }
                        InputProps={{
                          endAdornment: (
                            <>
                              <InputAdornment position='end'>
                                <IconButton onClick={() => push('')}>
                                  <AddCircle />
                                </IconButton>
                              </InputAdornment>
                              <InputAdornment position='end'>
                                <IconButton
                                  disabled={i === 0}
                                  onClick={() => remove(i)}
                                >
                                  <Delete />
                                </IconButton>
                              </InputAdornment>
                            </>
                          ),
                        }}
                      />
                    </div>
                  ))}
              </>
            )}
          </FieldArray>
          <ButtonGroup color='primary' fullWidth={true}>
            <Button type='submit' variant='contained'>
              Submit
            </Button>
            <Button type='button' onClick={() => history.goBack()}>
              Cancel
            </Button>
          </ButtonGroup>
        </form>
      )}
    </Formik>
  );
};

export default CreateForm;
