import { Spinner } from 'react-bootstrap';
import { useTranslations } from 'next-intl';

export const LoaderProcess = () => {
  const t = useTranslations('Process-Loader');
  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ fontSize: '23px' }}
      >
        <span style={{ marginRight: '100px' }}>
          {t('procesando_su_solicitud')}
        </span>{' '}
        <Spinner animation="grow" />
      </div>
    </>
  );
};
