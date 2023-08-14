import React from 'react'

const Heading = ({heading}) => {
  
  const currentHeading = heading;

  return (
    <div className='d-flex row mt-4'>
      <h1>{currentHeading}</h1>
    </div>
  )
}

export default Heading