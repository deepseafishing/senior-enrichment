'use strict';

const express = require('express');
const router = new express.Router();
const models = require('../db/models');
const Student = models.Student;
const Campus = models.Campus;
const HttpError = require('./HttpError');

// GET /api/students/:params
router.param('studentId', (req, res, next, studentId) => {
	Student.findOne({
		where: { id: studentId },
		include: [Campus]
	})
		.then(student => {
			if (!student) throw HttpError(404);
			req.requestedStudent = student;
			next();
			return null;
		})
		.catch(next);
});

// GET /api/students
router.get('/', (req, res, next) => {
	Student.findAll()
		.then(students => {
			res.json(students);
		})
		.catch(next);
});

// GET /api/students/:studnetId
router.get('/:studentId', (req, res, next) => {
	req.requestedStudent
		.then(student => {
			res.json(student);
		})
		.catch(next);
});

module.exports = router;
