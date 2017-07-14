'use strict';

const express = require('express');
const router = new express.Router();
const models = require('../db/models');
const Campus = models.Campus;
const Student = models.Student;
const HttpError = require('./HttpError');

// GET /api/students/:params
// router.param('campusId', (req, res, next, campusId) => {
// 	Campus.findById(campusId)
// 		.then(campus => {
// 			if (!campus) throw HttpError(404);
// 			req.requestedCampus = campus;
// 			next();
// 			return null;
// 		})
// 		.catch(next);
// });

// GET api/campuses/
router.get('/', (req, res, next) => {
	Campus.findAll().then(campuses => res.json(campuses)).catch(next);
});

// GET api/campuses/:campusId
router.get('/:campusId', (req, res, next) => {
	Campus.findAll({
		where: { id: req.params.campusId },
		include: [Student]
	})
		.then(campus => {
			res.json(campus);
		})
		.catch(next);
});

module.exports = router;
