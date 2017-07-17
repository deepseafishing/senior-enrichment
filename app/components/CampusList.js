import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCampus } from '../redux/campuses';

/* -----------------    COMPONENT     ------------------ */

function CampusList(props) {
  const campuses = props.campuses;

  return (
    <div>
      <h2>All Campuses</h2>
      <div className="row">
        <div className="campus-list">
          {campuses &&
            campuses.map(campus =>
              <div className="classImage col-xs-4" key={campus.id}>
                <div className="caption">
                  <h3>
                    <span>
                      {campus.name} Campus
                    </span>
                  </h3>
                  <button
                    className="btn btn-default btn-xs"
                    onClick={() => props.deleteCampus(campus)}
                  >
                    Delete
                  </button>
                </div>
                <Link className="thumbnail" to={`/campuses/${campus.id}`}>
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
  return {
    campuses: state.campuses.campuses
  };
}
function mapDispatch(dispatch) {
  return {
    deleteCampus(campus) {
      dispatch(removeCampus(campus));
    }
  };
}

export default connect(mapState, mapDispatch)(CampusList);
