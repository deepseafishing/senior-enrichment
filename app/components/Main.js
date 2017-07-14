import React from 'react';
import { Link } from 'react-router-dom';

export default function Main({ allData }) {
  return (
    <div>
      <img
        src="http://wallpapercave.com/wp/5KxAwmj.jpg"
        style={{ width: '100%' }}
      />
      <h2>Welcome to Slam Dunk!</h2>
      <h3>Home Page</h3>

      <div>
        <Link className="thumbnail" to="/campuses">
          All Campuses
        </Link>
      </div>
      <div>
        <Link className="thumbnail" to="students">
          All Students
        </Link>
      </div>
      <div className="col-xs-10">
        {allData}
      </div>
    </div>
  );
}
