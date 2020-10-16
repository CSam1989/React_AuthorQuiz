import * as React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import { initialState } from "../../redux/reducers/initialState";

export interface FormValues {
  name: string;
  imageUrl: string;
  books: string[];
}

const CreateAuthorSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  imageUrl: Yup.string().url("Give Url").required("Required"),
  books: Yup.array().of(Yup.string()).required("Required"),
});

const Create = () => {
  const initialFormValues: FormValues = initialState.turndata.author;
  return (
    <>
      <h1>Add Author</h1>
      <Formik
        initialValues={initialFormValues}
        validationSchema={CreateAuthorSchema}
        onSubmit={(values, actions) => console.log({ values, actions })}
      >
        {({ errors, touched, values }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <label htmlFor="imageUrl">Image Url</label>
            <Field id="imageUrl" name="imageUrl" placeholder="Image Url" />
            {errors.imageUrl && touched.imageUrl ? (
              <div>{errors.imageUrl}</div>
            ) : null}
            <FieldArray name="books">
              {({ remove, push }) => (
                <div>
                  {values.books.length > 0 &&
                    values.books.map((book, index) => (
                      <div className="row" key={index}>
                        <div className="col">
                          <label htmlFor={`books.${index}`}>{`Book${
                            index + 1
                          }`}</label>
                          <Field
                            name={`books.${index}`}
                            placeholder="Books"
                            type="text"
                          />
                          <ErrorMessage
                            name={`books.${index}`}
                            component="div"
                            className="field-error"
                          />
                        </div>
                        <div className="col">
                          <button
                            type="button"
                            className="secondary"
                            onClick={() => remove(index)}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    ))}
                  <button
                    type="button"
                    className="secondary"
                    onClick={() => push("")}
                  >
                    Add Book
                  </button>
                </div>
              )}
            </FieldArray>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Create;
