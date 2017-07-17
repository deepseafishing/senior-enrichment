import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

function CampusList(props) {
  const campuses = props.campuses.campuses;

  return (
    <div>
      <h2>All Campuses</h2>
      <div className="row">
        <div className="campus-list">
          {campuses &&
            campuses.map(campus =>
              <div className="classImage col-xs-4" key={campus.id}>
                <Link className="thumbnail" to={`/campuses/${campus.id}`}>
                  <div className="caption">
                    <h3>
                      <span>
                        {campus.name} Campus
                      </span>
                    </h3>
                  </div>
                  <img src={campus.image} />
                </Link>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

/* -----------------    CONTAINER     ------------------ */

function mapState(state) {
  return { campuses: state.campuses };
}

export default connect(mapState, null)(CampusList);
