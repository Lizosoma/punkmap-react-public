import React from 'react'
import Profile from '../Components/profile.component'
import UserInfo from '../Components/UserInfo'
import { Container } from 'react-bootstrap'

const PersAcc = () => {
  return (
    <Container>
      <div className='body-persacc'></div>
      <div className="main flex">
        <Profile />
        <UserInfo />
      </div>
    </Container>
  )
}

export default PersAcc