// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import {
	Col,
	Row,
	Container,
	Image,
	Form,
	Button,
	ListGroup
} from 'react-bootstrap';

// import widget/custom components
import { HermenautasSEO } from '../widgets';

// import hooks
import useMounted from '../hooks/useMounted';

const ComingSoon = () => {
	const hasMounted = useMounted();

	const calculateTimeLeft = () => {
		let launchdate = '2024-12-4';
		const difference = +new Date(launchdate) - +new Date();
		let timeLeft = {};
		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)).toLocaleString(
					'en-US',
					{ minimumIntegerDigits: 2, useGrouping: false }
				),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toLocaleString(
					'en-US',
					{ minimumIntegerDigits: 2, useGrouping: false }
				),
				minutes: Math.floor((difference / 1000 / 60) % 60).toLocaleString(
					'en-US',
					{ minimumIntegerDigits: 2, useGrouping: false }
				),
				seconds: Math.floor((difference / 1000) % 60).toLocaleString('en-US', {
					minimumIntegerDigits: 2,
					useGrouping: false
				})
			};
		}
		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
	const timerComponents = [];

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	Object.keys(timeLeft).forEach((interval, index) => {
		if (!timeLeft[interval]) {
			return;
		}
		timerComponents.push(
			<ListGroup.Item
				as="li"
				bsPrefix="list-inline-item"
				key={index}
				className="me-md-5"
			>
				<span className="days display-4 fw-bold  text-primary">
					{timeLeft[interval]}
				</span>
				<p className="fs-4 mb-0">{interval}</p>
			</ListGroup.Item>
		);
	});

	return (
		<Fragment>
			{/* Geeks SEO settings  */}
			<HermenautasSEO title="Coming soon | Hermenautas" />

			{/* Page Content */}
			<div className="bg-white">
				<Container className="d-flex flex-column">
					<Row className="align-items-center justify-content-center g-0 py-lg-22 py-10">
						{/* Docs */}
						<Col
							xl={{ span: 5, offset: 1 }}
							lg={6}
							md={12}
							sm={12}
							className="text-center text-lg-start"
						>
							<h1 className="display-3 mb-2 fw-bold">We&apos;re coming soon.</h1>
							<p className="mb-4 fs-4">
								Our website is under construction. We&apos;ll be here soon with our
								new awesome site, subscribe to be notified.
							</p>
							<div className="countdown">
								<ListGroup as="ul" bsPrefix="list-inline">
									{timerComponents.length && hasMounted ? (
										timerComponents
									) : (
										<ListGroup.Item as="li" bsPrefix="list-inline-item">
											<h1 className="text-danger">Time&apos;s up!</h1>{' '}
										</ListGroup.Item>
									)}
								</ListGroup>
							</div>
							<hr className="my-4" />							
						</Col>
						{/* img */}
						<Col
							xl={{ span: 5, offset: 1 }}
							lg={6}
							md={12}
							sm={12}
							className="mt-8 mt-lg-0"
						>
							<Image src="/images/background/comingsoon.svg" alt="" className="w-100" />
						</Col>
					</Row>
				</Container>
			</div>
		</Fragment>
	);
};

export default ComingSoon;
