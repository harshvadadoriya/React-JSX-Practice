import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
	name: '',
	email: '',
	channel: '',
};

const onSubmit = (values) => {
	console.log(values);
};

const validationSchema = Yup.object({
	name: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email format').required('Required'),
	channel: Yup.string().required('Required'),
});

const YoutubeForm = () => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			<Form>
				<div className="formControl">
					<label htmlFor="name">Name</label>
					<Field type="text" name="name" id="name" />
					<ErrorMessage name="name" />
				</div>

				<div className="formControl">
					<label htmlFor="email">E-mail</label>
					<Field type="text" name="email" id="email" />
					<ErrorMessage name="email" />
				</div>

				<div className="formControl">
					<label htmlFor="channel">Channel</label>
					<Field type="text" name="channel" id="channel" />
					<ErrorMessage name="channel" />
				</div>

				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
};
export default YoutubeForm;
