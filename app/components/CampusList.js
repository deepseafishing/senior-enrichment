import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

function CampusList(props) {
  const campuses = props.campuses;

  return (
    <div>
      <h2>All Campuses</h2>
      <div>
        <Link to="/add/campus">ADD A NEW CAMPUS</Link>
      </div>
      <div className="row">
        {campuses &&
          campuses.map(campus =>
            <div className="col-xs-4" key={campus.id}>
              <Link className="thumbnail" to={`campuses/${campus.id}`}>
                <img src={campus.image} />
                <div className="caption">
                  <h3>
                    <span>
                      Click here for more information on {campus.name} Campus.
                    </span>
                  </h3>
                </div>
              </Link>
            </div>
          )}
      </div>
    </div>
  );
}

/* -----------------    CONTAINER     ------------------ */

function mapState(state) {
  return { campuses: state.campuses };
}

export default connect(mapState, null)(CampusList);
