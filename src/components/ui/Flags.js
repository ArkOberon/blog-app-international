// import node module libraries
import Link from 'next/link'
import { Fragment } from 'react'
import { Form, Image } from 'react-bootstrap'

export const Flags = ({ className }) => {

  const imageSrc = '/images/svg/moon.svg'

  return (
    <Fragment key="1" className="mr-4">
      <Link 
        href="#" 
        type="checkbox" 
        id="flagSwitchCheckDefault" 
        className={`form-check form-switch theme-switch btn btn-light btn-icon rounded-circle mx-3`}
      >
        <Form.Check.Input type="checkbox" style={{ display: 'none' }} />
        <Form.Check.Label style={{ cursor: 'pointer' }}>
          <Image src={imageSrc} alt="" />
        </Form.Check.Label>
      </Link>
    </Fragment>
  )
}
