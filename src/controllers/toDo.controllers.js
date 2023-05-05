const catchError = require('../utils/catchError');
const ToDo = require('../models/ToDo');

const getAll = catchError(async(req, res) => {
    const toDos = await ToDo.findAll();
    return res.json(toDos);
});

const create = catchError(async(req, res) => {
    const { title, description, isCompleted } = req.body;
    const toDo = await ToDo.create({ title, description, isCompleted });
    return res.status(201).json(toDo);
})

module.exports = {
    getAll,
    create
}