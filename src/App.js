import React from 'react';
import './style.css';
import './app.css';
import 'semantic-ui-css/semantic.min.css';
import Create from './components/Create.js';
import Read from './components/Read.js';
import Update from './components/Update.js';
import Protected from './components/Protected.js';
import MuiNavbar from './components/MuiNavbar.js';
import Home from './components/Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header "></h2>
        <Routes>
          <Route exact path="/" element={<MuiNavbar />}>
            <Route index element={<Home />} />

            <Route
              exact
              path="/create"
              element={<Protected Component={Create} />}
            />
            <Route exact path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
