import {
	Formik,
	Form,
	Field,
	ErrorMessage,
	FieldArray,
	FastField,
} from 'formik';
import * as Yup from 'yup';

const initialValues = {
	name: '',
	email: '',
	channel: '',
	comments: '',
	address: '',
	social: {
		facebook: '',
		twitter: '',
	},
	phoneNumbers: ['', ''],
	phNumbers: [''],
};

const onSubmit = (values, onSubmitProps) => {
	// console.log(values);
	console.log('onSubmitProps:', onSubmitProps);
	onSubmitProps.setSubmitting(false);
};

const validateComments = (value) => {
	let error;
	if (!error) {
		error = 'Required';
	}
	return error;
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
			// validateOnChange={false}
			// validateOnBlur={false}
		>
			{(formik) => {
				// console.log(formik);
				return (
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
							<Field
								as="textarea"
								id="comments"
								name="comments"
								validate={validateComments}
							></Field>
							<ErrorMessage name="comments">
								{(errorMsg) => <div className="error">{errorMsg}</div>}
							</ErrorMessage>
						</div>

						<div className="formControl">
							<label htmlFor="address">Address</label>
							<FastField name="address">
								{(props) => {
									const { field, form, meta } = props;
									// console.log(props);
									return (
										<div>
											<input type="text" id="address" {...field} />
											{meta.touched && meta.error ? (
												<div>{meta.error}</div>
											) : null}
										</div>
									);
								}}
							</FastField>
						</div>

						<div className="formControl">
							<label htmlFor="facebook">Facebook Profile</label>
							<Field type="text" id="facebook" name="social.facebook"></Field>
						</div>
						<div className="formControl">
							<label htmlFor="twitter">Twitter Profile</label>
							<Field type="text" id="twitter" name="social.twitter"></Field>
						</div>

						<div className="formControl">
							<label htmlFor="primaryPh">Primary phone number</label>
							<Field type="text" id="primaryPh" name="phoneNumbers[0]"></Field>
						</div>
						<div className="formControl">
							<label htmlFor="secondaryPh">Secondary phone number</label>
							<Field
								type="text"
								id="secondaryPh"
								name="phoneNumbers[1]"
							></Field>
						</div>

						<div className="formControl">
							<label>List of phone numbers</label>
							<FieldArray name="phNumbers">
								{(fieldArrayProps) => {
									const { push, remove, form } = fieldArrayProps;
									const { values } = form;
									const { phNumbers } = values;
									console.log('form errors:', form.errors);
									return (
										<div>
											{phNumbers.map((phNumber, index) => (
												<div key={index}>
													<Field name={`phNumbers[${index}]`} />
													{index > 0 && (
														<button
															type="button"
															onClick={() => {
																remove(index);
															}}
														>
															-
														</button>
													)}
													<button
														type="button"
														onClick={() => {
															push('');
														}}
													>
														+
													</button>
												</div>
											))}
										</div>
									);
								}}
							</FieldArray>
						</div>

						<button
							type="button"
							onClick={() => formik.validateField('comments')}
						>
							Validate comments
						</button>
						<button type="button" onClick={() => formik.validateForm()}>
							Validate all
						</button>
						<button
							type="button"
							onClick={() => formik.setFieldTouched('comments')}
						>
							Visit comments
						</button>
						<button
							type="button"
							onClick={() =>
								formik.setTouched({
									name: true,
									email: true,
									channel: true,
									comments: true,
								})
							}
						>
							Visit fields
						</button>
						<button
							type="submit"
							disabled={!formik.isValid || formik.isSubmitting}
						>
							Submit
						</button>
					</Form>
				);
			}}
		</Formik>
	);
};
export default YoutubeForm;
