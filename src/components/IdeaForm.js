import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import cx from 'classnames';
import * as Yup from 'yup';
import styles from './IdeaForm.module.css';
import Button from './Button';
import FocusedInput from './FocusedInput';

const IdeaForm = ({
  id='',
  ideaList='',
  title = '',
  description = '',
  new: isNew = false,
  editing: isEditing = false,
  createdAt,
  saveIdea = () => {},
}) => (
  <div className={styles.container}>
    <Formik
      initialValues={{title, description}}
      validationSchema={Yup.object({
        title: Yup.string()
          .max(15, 'Title must be 25 characters or less')
          .required('A title is required'),
        description: Yup.string()
          .max(140, 'Description must be 140 characters or less'),
      })}
      onSubmit={(values) => {
        saveIdea({
          id,
          ideaList,
          title: values.title,
          description: values.description,
          createdAt: isNew ? Date.now() : createdAt,
          updatedAt: isEditing ? Date.now() : undefined,
        });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={styles.header}>
            <div>
              <Field
                type="text"
                name="title"
                className={cx(styles.input, styles.title)}
                component={FocusedInput}
                placeholder="Title"
              />
            </div>
            <div className={styles.lastCol}>
              <Button
                type="submit"
                primary
                disabled={isSubmitting}
              >
                Save
              </Button>
            </div>
          </div>
          <hr />
          <Field
            name="description"
            component="textarea"
            placeholder="Description"
            className={cx(styles.input, styles.description)}
          />
          <div className={styles.footer}>
            <div>
              <ErrorMessage
                name="title"
                component="div"
                className={styles.error}
              />
              <ErrorMessage
                name="description"
                component="div"
                className={styles.error}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default IdeaForm;
