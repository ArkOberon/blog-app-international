// import node module libraries
import { Image } from 'react-bootstrap';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useFormatter } from 'next-intl';

export const AuthorAndSharing = ({ data, date }) => {
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
        <Image
          src={data.avatar.url}
          alt=""
          className="rounded-circle avatar-md"
        />
        <div className="ms-2 lh-1">
          <h5 className="mb-1 ">
            {data.firstName} {data.lastName}
          </h5>
          <span className="text-primary">{postDate}</span>
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
