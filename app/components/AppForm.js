import React from "react";
import { Formik } from "formik";


function AppForm({ initialValues, onSubmit, validationSchema, childern }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{childern}</>}
    </Formik>
  );
}

export default AppForm;
