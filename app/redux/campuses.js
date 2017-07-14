import axios from 'axios';
const resData = res => res.data;

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_CAMPUSES';

/* ------------   ACTION CREATORS     ------------------ */

const init = campuses => ({ type: INITIALIZE, campuses });

/* ------------       REDUCER     ------------------ */

export default function reducer(campuses = [], action) {
	switch (action.type) {
		case INITIALIZE:
			return action.campuses;

		default:
			return campuses;
	}
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchCampuses = () => dispatch => {
	axios
		.get('/api/campuses')
		.then(resData)
		.then(campuses => dispatch(init(campuses)));
};

