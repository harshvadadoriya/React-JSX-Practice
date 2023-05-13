import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
	name: '',
	email: '',
	channel: '',
	comments: '',
	address: '',
};

const onSubmit = (values) => {
	console.log(values);
};

const validationSchema = Yup.object({
	name: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email format').required('Required'),
	channel: Yup.string().required('Required'),
	comments: Yup.string().required('Required'),
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
					<ErrorMessage name="name">
						{(errorMsg) => <div className="error">{errorMsg}</div>}
					</ErrorMessage>
				</div>

				<div className="formControl">
					<label htmlFor="email">E-mail</label>
					<Field type="text" name="email" id="email" />
					<ErrorMessage name="email">
						{(errorMsg) => <div className="error">{errorMsg}</div>}
					</ErrorMessage>
				</div>

				<div className="formControl">
					<label htmlFor="channel">Channel</label>
					<Field type="text" name="channel" id="channel" />
					<ErrorMessage name="channel">
						{(errorMsg) => <div className="error">{errorMsg}</div>}
					</ErrorMessage>
				</div>

				<div className="formControl">
					<label htmlFor="comments">Comments</label>
					<Field as="textarea" id="comments" name="comments"></Field>
					<ErrorMessage name="comments">
						{(errorMsg) => <div className="error">{errorMsg}</div>}
					</ErrorMessage>
				</div>

				<div className="formControl">
					<label htmlFor="address">Address</label>
					<Field name="address">
						{(props) => {
							const { field, form, meta } = props;
							// console.log(props);
							return (
								<div>
									<input type="text" id="address" {...field} />
									{meta.touched && meta.error ? <div>{meta.error}</div> : null}
								</div>
							);
						}}
					</Field>
				</div>

				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
};
export default YoutubeForm;
