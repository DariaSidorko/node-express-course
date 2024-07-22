

// controllers/people.js
const data = require('../data');

// GET /api/v1/people
const getPeople = (req, res) => {
  res.json(data.people);
};

// POST /api/v1/people
const addPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, message: "Please provide a name" });
  }

  const newPerson = { id: data.people.length + 1, name };
  data.people.push(newPerson);

  res.status(201).json({ success: true, name });
};

// GET /api/v1/people/:id
const getPersonById = (req, res) => {
  const { id } = req.params;
  const person = data.people.find(p => p.id === parseInt(id));
  if (!person) {
    return res.status(404).json({ success: false, message: "Person not found" });
  }
  res.json(person);
};

// PUT /api/v1/people/:id
const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = data.people.find(p => p.id === parseInt(id));
  if (!person) {
    return res.status(404).json({ success: false, message: "Person not found" });
  }
  person.name = name;
  res.json({ success: true, person });
};

// DELETE /api/v1/people/:id
const deletePerson = (req, res) => {
  const { id } = req.params;
  const found = data.people.some(p => p.id === parseInt(id));
  if (!found) {
    return res.status(404).json({ success: false, message: "Person not found" });
  }
  data.people = data.people.filter(p => p.id !== parseInt(id));
  res.json({ success: true, message: "Person deleted" });
};

 // handling 404 errors
 const notFound = (req, res, next) => {
    res.status(404).send("Not Found");
  };

module.exports = { getPeople, addPerson, getPersonById, updatePerson, deletePerson, notFound };