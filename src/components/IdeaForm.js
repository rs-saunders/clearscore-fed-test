import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import cx from 'classnames';
import * as Yup from 'yup';
import styles from './IdeaForm.module.css';
import Button from './Button';

const IdeaForm = ({ title = '', description = ''}) => (
  <div className={styles.container}>
    <Formik
      initialValues={{title, description}}
      validationSchema={Yup.object({
        title: Yup.string()
          .max(15, 'Title must be 25 characters or less')
          .required('A title is required'),
        description: Yup.string()
          .max(150, 'Description must be 150 characters or less'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
                placeholder="title"
              />
            </div>
            <div className={styles.lastCol}>
              <Button
                type="submit"
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
            placeholder="description"
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
