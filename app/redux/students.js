import axios from 'axios';
const resData = res => res.data;

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

const init = students => ({ type: INITIALIZE, students });
const addStudent = student => ({ type: ADD_STUDENT, student });
const removeStudent = removedStudent => ({
	type: REMOVE_STUDENT,
	removedStudent
});

/* ------------       REDUCER     ------------------ */

export default function reducer(students = [], action) {
	switch (action.type) {
		case INITIALIZE:
			return action.students;
		case ADD_STUDENT:
			return [...students, action.student];
		case REMOVE_STUDENT:
			return students.filter(
				student => student.id !== action.removedStudent.id
			);
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

export const deleteStudent = student => dispatch => {
	return axios
		.delete(`/api/students/${student.id}`)
		.then(resData)
		.then(() => {
			dispatch(removeStudent(student));
		})
		.catch(err => console.log(err));
};

export const createStudent = student => dispatch => {
	return axios
		.post(`/api/students/`, student)
		.then(resData)
		.then(student => {
			dispatch(addStudent(student));
		})
		.catch(err => console.log(err));
};
