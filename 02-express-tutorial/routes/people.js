
const express = require("express");
const router = express.Router();


const { getPeople, addPerson, getPersonById, updatePerson, deletePerson, notFound } = require('../controllers/people');

// GET /api/v1/people
router.get('/', getPeople);

// POST /api/v1/people
router.post('/', addPerson);

// GET /api/v1/people/:id
router.get('/:id', getPersonById);

// PUT /api/v1/people/:id
router.put('/:id', updatePerson);

// DELETE /api/v1/people/:id
router.delete('/:id', deletePerson);

// page not found
router.get('/', notFound);

module.exports = router;