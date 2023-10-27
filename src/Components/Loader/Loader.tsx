import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader: React.FC = () => {
  return <Spinner id='loader' variant="secondary" animation='border' />
}

export default Loader