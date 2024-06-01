import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DashboardNavbar from './Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import { MainBox, GamesContainer, PageContainer, Footer, NavContainer, Divider} from './DashboardContainer';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { CardContainer, DashboardContainer } from '../Components/DashboardContainers';

function ContactPage ({ token, setToken }) {
  const [ isContactSelected, selectContact] = useState(false);
  const [ isProjectsSelected, selectProjects] = useState(false);
  const [ isAboutSelected, selectAbout] = useState(false);

  return (
    <>
      {/* <MainBox> */}
        <DashboardNavbar token={token} setToken={setToken}/>
        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'space-evenly'}}>
          <div style={{ whiteSpace: 'nowrap', marginLeft: '75px', display: 'flex', flexDirection: 'column', justifyContent: 'center', rowGap: '30px'}}>
            
            <div style={{display: 'flex', flexDirection: 'column', marginRight: '41px'}}>
            {/* <h1>Let's talk</h1> */}
              <Nav.Link className='nav-links' style={{fontSize: '1.5em', marginRight: '0px', fontWeight: '100'}} as={Link} to="/projects" onClick={() => selectProjects(true)}>Get in touch</Nav.Link>
              {/* <p style={{color: 'grey'}}> - / Personal</p> */}
            </div>

          </div>
          <img src={require('./greencircles.png')} alt="Green Circle Icon" width="50%" height="50%" style={{marginTop: '18.5vh', marginLeft:'33.5vw'}}/>
        
        </div>
   {/* </MainBox> */}
    </>
  );
}

export default ContactPage;
