import React from 'react';
import { connect } from 'react-redux';
import { deleteStudent, createStudent } from '../redux/students';

/* -----------------    COMPONENT     ------------------ */
class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      email: '',
      campus: null
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.campus.value);
    const student = {
      name: event.target.name.value,
      email: event.target.email.value,
      campus: event.target.campus.value
    };
    this.props.addStudent(student);
    // clear the inputs
    event.target.name.value = '';
    event.target.email.value = '';
    event.target.campus.value = '';
  }

  render() {
    const students = this.props.students;
    const campuses = this.props.campuses.campuses;
    return (
      <div>
        <div className="list-group">
          <h2>Here are all of our students</h2>
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
        <div className="row add-student">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s3">
                <i className="material-icons prefix">account_circle</i>
                <input
                  placeholder="Name"
                  id="name"
                  type="text"
                  className="validate"
                  onChange={evt => this.setState({ name: evt.target.value })}
                />
              </div>
              <div className="input-field col s3">
                <i className="material-icons prefix">email</i>
                <input
                  placeholder="Email"
                  id="email"
                  type="email"
                  className="validate"
                  onChange={evt => this.setState({ email: evt.target.value })}
                />
              </div>
              <div className="input-field col s3">
                <select
                  id="campus"
                  type="campus"
                  className="browser-default"
                  onChange={evt => this.setState({ campus: evt.target.value })}
                >
                  <option value="" disabled selected>
                    Campus Select
                  </option>
                  {campuses &&
                    campuses.map(campus => {
                      return (
                        <option value={campus.id} key={campus.id}>
                          {campus.name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <button type="submit" className="btn btn-default btn-xs col s3">
                Add New Student
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

function mapState(state) {
  return {
    students: state.students,
    campuses: state.campuses
  };
}

function mapDispatch(dispatch, ownProps) {
  return {
    removeStudent(student) {
      dispatch(deleteStudent(student));
    },
    addStudent(student) {
      dispatch(createStudent(student));
    }
  };
}

export default connect(mapState, mapDispatch)(StudentList);
