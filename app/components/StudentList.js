import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { removeStudent } from '../redux/students';

/* -----------------    COMPONENT     ------------------ */

class StudentList extends React.Component {
  constructor(props) {
    super(props);

    this.removeStudent = this.removeStudent.bind(this);
  }

  removeStudent(student) {
    this.props.removeStudent(student);
  }

  render() {
    const students = this.props.students;

    return (
      <div>
        <h2>Students</h2>
        <div className="list-group">
          {students &&
            students.map(student =>
              <div className="list-group-item" key={student.id}>
                <Link to={`/students/${student.id}`}>
                  <span>
                    {student.name} - {student.email}
                  </span>
                </Link>
                <button
                  className="btn btn-default btn-xs"
                  onClick={this.removeStudent.bind(this, student)}
                >
                  Click to Delete this student
                </button>
                <hr />
              </div>
            )}
        </div>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

function mapState(state) {
  return { students: state.students };
}

function mapDispatch(dispatch) {
  return {
    removeStudent: function(student) {
      const action = removeStudent(student);
      dispatch(action);
    }
  };
}

export default connect(mapState, mapDispatch)(StudentList);
