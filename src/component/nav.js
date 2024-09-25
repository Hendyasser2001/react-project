import React, { useEffect , useState } from 'react';
import {Navbar , Container , Nav } from "react-bootstrap" ;
import logo from '../images/logo.svg';
import face from '../images/face.png';
import insta from '../images/insta.jpg';
import lin from '../images/lin.jpg';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
      }, [])

      
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }


    return(
        <router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand className="logo" href="#home">
            <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
            onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
            onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
            onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
           
          </Nav>
          <span className="navbar-text">
            <div className="icons">
                <a href="#"><img src={face}/></a>
                <a href="#"><img src={insta}/></a>
                <a href="#"><img src={lin}/></a>

            </div>
                <button><span>Let’s Connect</span></button>
                
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</router>
    )
}