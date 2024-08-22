// import node module libraries
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Image, Button, Modal } from 'react-bootstrap';
import Link from 'next/link';
import { useTranslations, useFormatter } from 'next-intl';
import {
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from 'react-share';

// Global Variables
import { defaultImage } from '../../global';

export const AuthorAndSharing = ({ data, date, lastComponent }) => {
  const [show, setShow] = useState(false);
  const format = useFormatter();
  const router = useRouter();
  const { asPath } = router;

  const t = useTranslations('AuthorSection');
  const shareUrl = `https://hermenautas.com${asPath}`;
  const dateTime = new Date(date);

  const postDate = format.dateTime(dateTime, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex justify-content-between align-items-center mb-5">
      <div className="d-flex align-items-center">
        {data.avatar.url.includes(defaultImage) ? (
          <></>
        ) : (
          <Image
            src={data.avatar.url}
            alt=""
            className="rounded-circle avatar-xl"
          />
        )}
        <div className="ms-2 lh-1">
          <h3 className="mb-1 text-primary">
            {data.firstName} {data.lastName}
          </h3>
          {lastComponent ? (
            <p>{data.description}</p>
          ) : (
            <span className="text-primary">{postDate}</span>
          )}
        </div>
      </div>

      {data.description && lastComponent ? (
        <></>
      ) : (
        <div>
          <span className="ms-2 text-muted">{t('share')}</span>

          <Link href="#" className="ms-2 text-muted" onClick={handleShow}>
            <i className="fe fe-share-2"></i>
          </Link>
          <Link
            href="https://www.facebook.com/hermenautasoficial/"
            className="ms-2 text-muted"
          >
            <i className="fab fa-facebook"></i>
          </Link>
          <Link href="https://x.com/hermenautasTM" className="ms-2 text-muted">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link
            href="https://www.youtube.com/@hermenautas"
            className="ms-2 text-muted"
          >
            <i className="fab fa-youtube"></i>
          </Link>
          <Link
            href="https://www.instagram.com/hermenautas.official"
            className="ms-2 text-muted"
          >
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      )}
      {
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <bold>{t('share')}</bold>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>{t('share_link')}</div>

            <FacebookShareButton url={shareUrl} style={{ marginRight: '5px' }}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton url={shareUrl} style={{ marginRight: '5px' }}>
              <XIcon size={32} round />
            </TwitterShareButton>

            <TelegramShareButton url={shareUrl} style={{ marginRight: '5px' }}>
              <TelegramIcon size={32} round />
            </TelegramShareButton>

            <InstapaperShareButton
              url={shareUrl}
              style={{ marginRight: '5px' }}
            >
              <InstapaperIcon size={32} round />
            </InstapaperShareButton>

            <WhatsappShareButton url={shareUrl} style={{ marginRight: '5px' }}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            <LinkedinShareButton url={shareUrl} style={{ marginRight: '5px' }}>
              <LinkedinIcon size={32} ml={3} round />
            </LinkedinShareButton>

            <TumblrShareButton url={shareUrl} style={{ marginRight: '5px' }}>
              <TumblrIcon size={32} ml={3} round />
            </TumblrShareButton>

            <RedditShareButton url={shareUrl} style={{ marginRight: '5px' }}>
              <RedditIcon size={32} ml={3} round />
            </RedditShareButton>

            <LineShareButton url={shareUrl} style={{ marginRight: '5px' }}>
              <LineIcon size={32} ml={3} round />
            </LineShareButton>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              {t('close')}
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </div>
  );
};
