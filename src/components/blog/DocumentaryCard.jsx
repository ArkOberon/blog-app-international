// import node module libraries
import Link from 'next/link';
import { Image, Card } from 'react-bootstrap';
import parse from 'html-react-parser';

// Custom functionalities
import { decodeHtml } from '../../utils/decodeHTML';

export const DocumentaryCard = ({ item, url, extraclass }) => {
  return (
    <Card className={`mb-4 card-hover ${extraclass}`}>
      <Link href={`${url}/${item.slug}`}>
        <Image
          src={item.featuredImage.node.link}
          alt=""
          className="card-img-top rounded-top-md"
        />
      </Link>
      {/* Card body  */}
      <Card.Body>
        <h2 className="h3 mb-2 text-truncate-line-2 ">
          <Link href={`${url}/${item.slug}`} className="text-inherit">
            {item.title}
          </Link>
        </h2>
        <div className={'lh-1 mt-3d'}>
          <span className="text-dark fs-6">
            {parse(decodeHtml(item.excerpt))}
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};
