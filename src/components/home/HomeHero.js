// import node module libraries
import { useState } from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import Link from 'next/link';

// import popup youtube video
import ModalVideo from 'react-modal-video';

export const HomeHero = () => {
  const [isOpen, setOpen] = useState(false);
  const [YouTubeURL] = useState('JRzWRZahOVU');

  return (
    <section className="py-lg-16 py-8 bg-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-6 mb-lg-0">
            <div className="">
              <p className="text-dark mb-4">
                <i className="fe fe-check icon-xxs icon-shape bg-light-success text-success rounded-circle me-2"></i>{' '}
                Most trusted education platform
              </p>
              <h1 className="display-3 fw-bold mb-3">
                Grow your skills and advance career
              </h1>
              <p className="pe-lg-10 mb-5">
                Start, switch, or advance your career with more than 5,000
                courses, Professional Certificates, and degrees from world-class
                universities and companies.
              </p>
              <Link href="#" className="btn btn-primary">
                Join Free Now
              </Link>
              <Link
                href="#"
                onClick={() => setOpen(true)}
                className="popup-youtube fs-4 text-inherit ms-3"
              >
                <Image src="/images/svg/play-btn.svg" alt="" className="me-2" />
                Watch Demo
              </Link>
              {/* video popup */}
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId={YouTubeURL}
                onClose={() => setOpen(false)}
              />
            </div>
          </Col>
          <Col lg={6} className="d-flex justify-content-center">
            <div className="position-relative">
              <Image
                src="/images/background/acedamy-img/bg-thumb.svg"
                alt=""
                className=""
              />
              <Image
                src="/images/background/acedamy-img/girl-image.png"
                alt=""
                className="position-absolute end-0 bottom-0"
              />
              <Image
                src="/images/background/acedamy-img/frame-1.svg"
                alt=""
                className="position-absolute top-0 ms-lg-n10 ms-n19"
              />
              <Image
                src="/images/background/acedamy-img/frame-2.svg"
                alt=""
                className="position-absolute bottom-0 start-0 ms-lg-n14 ms-n6 mb-n7"
              />
              <Image
                src="/images/background/acedamy-img/target.svg"
                alt=""
                className="position-absolute bottom-0 mb-10 ms-n10 ms-lg-n1 "
              />
              <Image
                src="/images/background/acedamy-img/sound.svg"
                alt=""
                className="position-absolute top-0  start-0 mt-18 ms-lg-n19 ms-n8"
              />
              <Image
                src="/images/background/acedamy-img/trophy.svg"
                alt=""
                className="position-absolute top-0  start-0 ms-lg-n14 ms-n5"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
