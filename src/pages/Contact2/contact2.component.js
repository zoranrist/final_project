import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import { TextField } from "@material-ui/core";

import "./contact2.component.css";

const CustomTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const error = meta.error && meta.touched ? meta.error : "";

  return (
    <TextField label={label} {...field} helperText={error} error={!!error} />
  );
};

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  comment: Yup.string(),
});

const Contact2 = () => {
  return (
    <div className="container">
      <Formik
        initialValues={{ firstName: "", email: "", comment: "" }}
        validationSchema={ContactSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <Form>
              <CustomTextField name="firstName" label="First Name" />
              <ErrorMessage name="firstName" component="div" />
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="textarea" as="textarea" name="comment" />
              <ErrorMessage name="comment" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Contact2;
