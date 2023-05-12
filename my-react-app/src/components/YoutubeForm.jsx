import { useFormik } from 'formik';
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
	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	// console.log(formik.errors);
	// console.log(formik.touched);

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div className="formControl">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						{...formik.getFieldProps('name')}
					/>
					{formik.touched.name && formik.errors.name && (
						<div className="error">{formik.errors.name}</div>
					)}
				</div>

				<div className="formControl">
					<label htmlFor="email">E-mail</label>
					<input
						type="text"
						name="email"
						id="email"
						{...formik.getFieldProps('email')}
					/>
					{formik.touched.email && formik.errors.email && (
						<div className="error">{formik.errors.email}</div>
					)}
				</div>

				<div className="formControl">
					<label htmlFor="channel">Channel</label>
					<input
						type="text"
						name="channel"
						id="channel"
						{...formik.getFieldProps('channel')}
					/>
					{formik.touched.channel && formik.errors.channel && (
						<div className="error">{formik.errors.channel}</div>
					)}
				</div>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
export default YoutubeForm;
