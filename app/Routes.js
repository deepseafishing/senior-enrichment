import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import StudentList from './components/StudentList';
import CampusList from './components/CampusList';
import Campus from './components/Campus';

import { fetchStudents } from './redux/students';
import { fetchCampuses } from './redux/campuses';

/* -----------------    COMPONENT     ------------------ */

class Routes extends Component {
  componentDidMount() {
    this.props.fetchInitialData();
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/campuses" component={CampusList} />
            <Route path="/campuses/:campusId" component={Campus} />
            <Route path="/students" component={StudentList} />
            {
              // <Route exact path="/add/campus" component={NewCampusEntry} />
              // <Route exact path="/students/:studentId" component={Stud
            }
            <Route component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchStudents());
    dispatch(fetchCampuses());
  }
});

export default connect(mapProps, mapDispatch)(Routes);
