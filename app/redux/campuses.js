import axios from 'axios';
const resData = res => res.data;
const initialState = {
	campuses: [],
	campus: {}
};
/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

const init = campuses => ({ type: INITIALIZE, campuses });
const getCampus = campus => ({ type: GET_CAMPUS, campus });
const deleteCampus = campus => ({ type: DELETE_CAMPUS, campus });

/* ------------       REDUCER     ------------------ */

export default function reducer(state = initialState, action) {
	// Object.assign({}, state, )
	switch (action.type) {
		case INITIALIZE:
			return Object.assign({}, state, {
				campuses: action.campuses
			});
		case GET_CAMPUS:
			return Object.assign({}, state, {
				campus: action.campus
			});
		case DELETE_CAMPUS:
			return Object.assign({}, state, {
				campuses: state.campuses.filter(
					campus => campus.id !== action.campus.id
				)
			});

		default:
			return state;
	}
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchCampuses = () => dispatch => {
	axios
		.get('/api/campuses')
		.then(resData)
		.then(campuses => dispatch(init(campuses)));
};

export const fetchCampusStudents = campusId => dispatch => {
	axios.get(`/api/campuses/${campusId}`).then(resData).then(campus => {
		dispatch(getCampus(campus));
	});
};

export const removeCampus = campus => dispatch => {
	return axios.delete(`/api/campuses/${campus.id}`).then(resData).then(() => {
		dispatch(deleteCampus(campus));
	});
};
