import React from 'react'
import {
  Navbar,
  Container,
  Nav
} from 'react-bootstrap'
import logo from '../Media/PUNKMAP.svg'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import RegLog from '../Pages/RegLog'
import Map from '../Pages/Map'
import PersAcc from '../Pages/PersAcc'

const Header = () => {
  return (
    <>
         <Navbar className='header'>
           <Container>
             <Navbar.Brand href='/map'>
               <img
                src={logo}
                className='header-logo'
                alt='Logo'
              />
            </Navbar.Brand>
            <Nav>
              <Nav.Link href='/reglog' className='header__link'>Регистрация</Nav.Link>
              <Nav.Link href='/persacc' className='header__link'>ЛК (временно)</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route exaxt path='/map' Component={Map} />
            <Route exaxt path='/reglog' Component={RegLog} />
            <Route exaxt path='/persacc' Component={PersAcc} />
          </Routes>
        </Router>
      </>
  )
}

export default Header