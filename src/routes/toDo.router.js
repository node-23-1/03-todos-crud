const { getAll, create } = require('../controllers/toDo.controllers');
const express = require('express');

const toDoRouter = express.Router();

toDoRouter.route("/")
		.get(getAll)
        .post(create);

module.exports = toDoRouter;
