import axios from 'axios';
const resData = res => res.data;

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_STUDENTS';

/* ------------   ACTION CREATORS     ------------------ */

const init = students => ({ type: INITIALIZE, students });

/* ------------       REDUCER     ------------------ */

export default function reducer(students = [], action) {
	switch (action.type) {
		case INITIALIZE:
			return action.students;

		default:
			return students;
	}
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchStudents = () => dispatch => {
	axios
		.get('/api/students')
		.then(resData)
		.then(student => dispatch(init(student)));
};

export const removeStudent = student => dispatch => {
	axios
		.delete(`/api/students/${student.id}`)
		.then(resData)
		.then(students => {
			dispatch(init(students));
		})
		.catch(err => console.log(err));
};
