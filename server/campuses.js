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
router.get('/:campusId', (req, res, next) => {
	req.requestedCampus
		.then(campus => {
			res.json(campus);
		})
		.catch(next);
});

//POST /api/add/campus
router.post('/campus', (req, res, next) => {
	Campus.create(req.body).then(newCampus => res.send(newCampus)).catch(next);
});

// DELETE api/campuses/:campusId
router.delete('/:campusId', (req, res, next) => {
	req.requestedCampus
		.then(campus => {
			if (campus) return campus.destroy();
			else res.status(404).end();
		})
		.then(campus => {
			res.status(204).end();
		})
		.catch(next);
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
