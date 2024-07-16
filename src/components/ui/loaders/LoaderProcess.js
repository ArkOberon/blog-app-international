import { Spinner } from 'react-bootstrap'

export const LoaderProcess = () => {
  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ fontSize: '23px' }}
      >
        <span style={{ marginRight: '100px' }}>Procesando su solicitud...</span>{' '}
        <Spinner animation="grow" />
      </div>
    </>
  )
}
