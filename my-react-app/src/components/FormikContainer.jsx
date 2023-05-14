import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
	const initialValue = {
		email: '',
	};
	const validationSchema = Yup.object({
		email: Yup.string().required('Required'),
	});
	const onSubmit = (values) => console.log('Form data', values);
	return (
		<Formik
			initialValues={initialValue}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{(formik) => (
				<Form>
					<FormikControl
						control="input"
						type="email"
						label="Email"
						name="email"
					/>
					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	);
};

export default FormikContainer;
