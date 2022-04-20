import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
  return (
    <>
        <div className='d-flex align-items-center justify-content-center' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <Spinner animation="grow" variant="info" style={{ width: '3rem', height: '3rem', margin:'2px' }}/>
            <Spinner animation="grow" variant="info" style={{ width: '3rem', height: '3rem', margin:'2px' }}/>
            <Spinner animation="grow" variant="info" style={{ width: '3rem', height: '3rem', margin:'2px' }}/>
        </div>
    </>
  )
}

export default Loading