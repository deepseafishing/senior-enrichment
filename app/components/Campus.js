import React from 'react';
import { connect } from 'react-redux';
import { fetchCampusStudents } from '../redux/campuses';
import { Link } from 'react-router';
/* -----------------    COMPONENT     ------------------ */

class Campus extends React.Component {
  componentDidMount() {
    this.props.fetchCampus();
  }

  render() {
    const campus = this.props.campus;
    return (
      <div>
        <h2>
          {this.props.campus}Students
        </h2>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

function mapState(state) {
  return {
    campus: state.campus
  };
}

function mapDispatch(dispatch, ownProps) {
  return {
    fetchCampus: () => {
      dispatch(fetchCampusStudents(ownProps.match.params.campusId));
    }
  };
}

export default connect(mapState, mapDispatch)(Campus);
