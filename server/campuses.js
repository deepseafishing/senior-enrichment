'use strict';

const express = require('express');
const router = new express.Router();
const models = require('../db/models');
const Campus = models.Campus;
module.exports = router;

router.get('/', (req, res, next) => {
	Campus.findAll()
	.then(campuses => res.json(campuses))
	.catch(next);
});

router.param('campusId', (req, res, next, id) => {
	Campus.findById(id)
	.then(campus => {
		if (!campus) {
			const err = Error('Campus not found');
			err.status = 404;
			throw err;
		}
		res.json(campus)
	})
	.catch(next);
});
