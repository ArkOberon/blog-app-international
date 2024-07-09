// import node module libraries
import { Fragment, useEffect, useState } from 'react';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';

// import widget/custom components
import { HermenautasSEO } from '../../widgets';

// import API functions
import { registerUser } from '../api/user/registerUser';

const SignUp = () => {
	
	const [submit, setSubmit] = useState(false)

	useEffect(() => {
		if (submit) {
			console.log('Submit')
		}
	}, [submit])

	const handleSubmit = async (e) => {
		e.preventDefault()

		const response = await registerUser(e.target.username.value, e.target.email.value, e.target.password.value)
		console.log(response)

		if(response.errors){
			return;
		} else {
			setSubmit(true)		
		}
	}

	return (
		<Fragment>
			{/* SEO settings  */}
			<HermenautasSEO title="Sign Up | Hermenautas" />

			<Row className="align-items-center justify-content-center g-0 min-vh-100">
				<Col lg={5} md={5} className="py-8 py-xl-0">
					<Card>
						<Card.Body className="p-6">
							<div className="mb-4">
								<Link href="/">
									<Image src="/images/brand/logo/logo-icon.svg" className="mb-4" alt="" />
								</Link>
								<h1 className="mb-1 fw-bold">Sign up</h1>
								<span>
									Already have an account?{' '}
									<Link href="/authentication/sign-in" className="ms-1">
										Sign in
									</Link>
								</span>
							</div>
							{/* Form */}
							<Form onSubmit={handleSubmit}>
								<Row>
									<Col lg={12} md={12} className="mb-3">
										{/* User Name */}
										<Form.Label>User Name</Form.Label>
										<Form.Control
											type="text"
											id="username"
											placeholder="User Name"
											required
										/>
									</Col>
									<Col lg={12} md={12} className="mb-3">
										{/* email */}
										<Form.Label>Email </Form.Label>
										<Form.Control
											type="email"
											id="email"
											placeholder="Email address here"
											required
										/>
									</Col>
									<Col lg={12} md={12} className="mb-3">
										{/* Password */}
										<Form.Label>Password </Form.Label>
										<Form.Control
											type="password"
											id="password"
											placeholder="Your Password"
											required
										/>
									</Col>
									<Col lg={12} md={12} className="mb-3">
										{/* Checkbox */}
										<Form.Check type="checkbox" id="check-api-checkbox">
											<Form.Check.Input type="checkbox" required />
											<Form.Check.Label>
												I agree to the{' '}
												<Link href="/marketing/specialty/terms-and-conditions/">
													Terms of Service
												</Link>{' '}
												and{' '}
												<Link href="/marketing/specialty/terms-and-conditions/">
													Privacy Policy.
												</Link>
											</Form.Check.Label>
										</Form.Check>
									</Col>
									<Col lg={12} md={12} className="mb-0 d-grid gap-2">
										{/* Button */}
										<Button variant="primary" type="submit">
											Sign in
										</Button>
									</Col>
								</Row>
							</Form>
							<hr className="my-4" />
							<div className="mt-4 text-center">
								{/* Facebook */}
								<Link href="#" className="btn-social btn-social-outline btn-facebook">
									<i className="fab fa-facebook"></i>
								</Link>{' '}
								{/* Twitter */}
								<Link href="#" className="btn-social btn-social-outline btn-twitter">
									<i className="fab fa-twitter"></i>
								</Link>{' '}
								{/* LinkedIn */}
								<Link href="#" className="btn-social btn-social-outline btn-linkedin">
									<i className="fab fa-linkedin"></i>
								</Link>{' '}
								{/* GitHub */}
								<Link href="#" className="btn-social btn-social-outline btn-github">
									<i className="fab fa-github"></i>
								</Link>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default SignUp;