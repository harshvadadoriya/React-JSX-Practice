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

// const validate = (values) => {
// 	let errors = {};
// 	if (!values.name) {
// 		errors.name = 'Required';
// 	}
// 	if (!values.email) {
// 		errors.email = 'Required';
// 	} else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)) {
// 		errors.email = 'Invalid email format';
// 	}
// 	if (!values.channel) {
// 		errors.channel = 'Required';
// 	}
// 	return errors;
// };

const validationSchema = Yup.object({
	name: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email format').required('Required'),
	channel: Yup.string().required('Required'),
});

const OldYoutubeForm = () => {
	const formik = useFormik({
		initialValues,
		onSubmit,
		// validate,
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
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
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
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
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
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.channel}
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
export default OldYoutubeForm;
