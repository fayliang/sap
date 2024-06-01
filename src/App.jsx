import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import InfoPage from './InfoPage';
import './App.css'

function App () {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/info" element={<InfoPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
