import axios from 'axios';
const resData = res => res.data;
const initialState = {
	campuses: [],
	campus: {}
};
/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

const init = campuses => ({ type: INITIALIZE, campuses });
const getCampus = campus => ({ type: GET_CAMPUS, campus });

/* ------------       REDUCER     ------------------ */

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case INITIALIZE:
			return Object.assign({}, state, {
				campuses: action.campuses
			});
		case GET_CAMPUS:
			return Object.assign({}, state, {
				campus: action.campus
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
