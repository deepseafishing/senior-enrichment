'use strict';

const express = require('express');
const router = new express.Router();
const models = require('../db/models');
const Campus = models.Campus;
const HttpError = require('./HttpError');

// GET /api/students/:params
router.param('campusId', (req, res, next, campusId) => {
	Campus.findById(campusId)
		.then(campus => {
			if (!campus) throw HttpError(404);
			req.requestedCampus = campus;
			next();
			return null;
		})
		.catch(next);
});

// GET api/campuses/
router.get('/', (req, res, next) => {
	Campus.findAll().then(campuses => res.json(campuses)).catch(next);
});

// GET api/campuses/:campusId
router.get('/:id', (req, res, next) => {
	Student.findAll({
		where: {
			campusId: req.params.campusId
		}
	})
		.then(students => {
			res.json(students);
		})
		.catch(next);
});

//POST /api/add/campus
router.post('/campus', (req, res, next) => {
	Campus.create(req.body).then(newCampus => res.send(newCampus)).catch(next);
});

// PUT api/edit/campuses/:id
router.put('/campuses/:campusId', (req, res, next) => {
	req.requestedCampus
		.then(campus => {
			if (!campus) throw HttpError(404);
			campus.update(req.body);
			res.send(campus);
		})
		.catch(next);
});

module.exports = router;
