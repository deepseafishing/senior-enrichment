import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

function Navigator() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo center">
          Welcome to Slam Dunk!
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <Link to="/campuses">CAMPUS</Link>
          </li>
        </ul>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/students">STUDENT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigator;
