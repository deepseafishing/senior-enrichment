import React from 'react';
import { connect } from 'react-redux';
import { fetchCampusStudents } from '../redux/campuses';
import { Link } from 'react-router';
import { deleteStudent } from '../redux/students';
/* -----------------    COMPONENT     ------------------ */

class Campus extends React.Component {
  componentDidMount() {
    this.props.fetchCampus();
  }
  removeStudent(student) {
    this.props.removeStudent(student);
  }

  render() {
    const campus = this.props.campus;
    const students = this.props.students;
    return (
      <div>
        <h2>
          Hello, {campus.name} Students!
        </h2>
        {students &&
          students.map(student =>
            <div className="list-group-item" key={student.id}>
              <span>
                Student Name:
                {student.name}
              </span>
              <br />
              <span>
                Student Email:
                {student.email}
              </span>
              <button
                className="btn btn-default btn-xs"
                onClick={() => this.props.removeStudent(student)}
              >
                Delete
              </button>
              <hr />
            </div>
          )}
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

function mapState(state) {
  return {
    campus: state.campuses.campus,
    stduents: state.students,
    students: state.campuses.campus.students
  };
}

function mapDispatch(dispatch, ownProps) {
  return {
    fetchCampus() {
      dispatch(fetchCampusStudents(ownProps.match.params.campusId));
    },
    removeStudent(student) {
      dispatch(deleteStudent(student)).then(() => {
        dispatch(fetchCampusStudents(ownProps.match.params.campusId));
      });
    }
  };
}

export default connect(mapState, mapDispatch)(Campus);
