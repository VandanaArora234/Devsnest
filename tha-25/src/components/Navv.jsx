import React from 'react'
import Home from './Home';
import About from './About';
import { Switch, Route, Link } from 'react-router-dom';
import {Container, Nav, Navbar, Carousel} from 'react-bootstrap';



const Routing = () =>{
    return(
        <div>
            <Switch>
                <Route path='/about'>
                    <About />
                </Route>

                <Route path='/home'>
                <Home />
            </Route>
            </Switch>
        </div>
    )
}


const Navv = () => {
    return (
       
              <div>
   <Navbar bg="dark" variant="dark">
    <Container>
   <Link to='/'> <Navbar.Brand href="/">Navbar</Navbar.Brand></Link>
    <Nav className="me-auto">
    <Link  to='/home'> <Nav.Link href="/home">Home</Nav.Link></Link>
    <Link  to='/about'> <Nav.Link href="/about">About</Nav.Link></Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
   </div>

    )
}

export {Navv, Routing};

