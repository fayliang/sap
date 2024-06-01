import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DashboardNavbar from './Navbar';
import { MainBox, GamesContainer, PageContainer, Footer, NavContainer, Divider} from './DashboardContainer';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { CardContainer, DashboardContainer } from '../Components/DashboardContainers';

function Dashboard ({ token, setToken }) {
  
  return (
    <>
      {/* <MainBox> */}
        <DashboardNavbar token={token} setToken={setToken}/>
        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'space-evenly'}}>
          <p style={{whiteSpace: 'nowrap', position: 'relative', marginTop: '80vh', marginLeft: '75px', marginRight: '5px', fontWeight: 'lighter'}}>Frontend Developer</p>
          <img src={require('./greencircles.png')} alt="Green Circle Icon" width="50%" height="50%" style={{marginTop: '18.5vh', marginLeft:'35.5vw'}}/>
          
        </div>
   {/* </MainBox> */}
    </>
  );
}

export default Dashboard;
