// import node module libraries
import { Image } from 'react-bootstrap';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useFormatter } from 'next-intl';

// Global Variables
import { defaultImage } from '../../global';

export const AuthorAndSharing = ({ data, date, lastComponent }) => {
  const format = useFormatter();
  const t = useTranslations('AuthorSection');

  const dateTime = new Date(date);

  const postDate = format.dateTime(dateTime, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="d-flex justify-content-between align-items-center mb-5">
      <div className="d-flex align-items-center">
        {data.avatar.url.includes(defaultImage) ? (
          <></>
        ) : (
          <Image
            src={data.avatar.url}
            alt=""
            className="rounded-circle avatar-md"
          />
        )}
        <div className="ms-2 lh-1">
          <h3 className="mb-1 text-primary">
            {data.firstName} {data.lastName}
          </h3>
          {lastComponent ? (
            <p className="fs-6">{data.description}</p>
          ) : (
            <span className="text-primary">{postDate}</span>
          )}
        </div>
      </div>
      <div>
        <span className="ms-2 text-muted">{t('share')}</span>
        <Link
          href="https://www.facebook.com/hermenautasoficial/"
          className="ms-2 text-muted"
        >
          <i className="fab fa-facebook"></i>
        </Link>
        <Link href="https://x.com/hermenautasl" className="ms-2 text-muted">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link
          href="https://www.linkedin.com/company/hermenautas-sl/"
          className="ms-2 text-muted"
        >
          <i className="fab fa-linkedin"></i>
        </Link>
      </div>
    </div>
  );
};
