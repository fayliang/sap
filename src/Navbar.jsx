import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MainNavContainer, GamesContainer, PageContainer, Footer, NavContainer, Divider} from './DashboardContainer';
/**
 * Navbar component that displays brand name and logout button
 */
function DashboardNavbar ({ token, setToken }) {
  const [isMobile, setIsMobile] = useState(false);
  const [ isContactSelected, selectContact] = useState(false);
  const [ isProjectsSelected, selectProjects] = useState(false);
  const [ isAboutSelected, selectAbout] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  console.log("is contact selected", isContactSelected)
  return (
    <>
      <Navbar className="justify-content-end">
        <MainNavContainer>
        <Nav.Link className='nav-links' style={{marginLeft: '75px', whiteSpace: 'nowrap', fontWeight: 'lighter'}}as={Link} to="/">Fay Liang</Nav.Link>
          <NavContainer>
              <>
                <Nav.Link className='nav-links' style={{marginRight: '75px', fontWeight: 'lighter'}} as={Link} to="/projects" onClick={() => selectProjects(true)}>Projects</Nav.Link>
                <Nav.Link className='nav-links' style={{marginRight: '75px', fontWeight: 'lighter'}} as={Link} to="/info" onClick={() => selectAbout(true)}>Info</Nav.Link>
                <Nav.Link className='nav-links' style={{marginRight: '50px', fontWeight: 'lighter'}} as={Link} to="/contact" onClick={() => selectContact(true)}>Contact</Nav.Link>
              </>
          </NavContainer>
        </MainNavContainer>
      </Navbar>
      <br />
    </>
  );
}

export default DashboardNavbar;
