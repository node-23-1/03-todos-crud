const express = require('express');
const toDoRouter = require('./toDo.router');
const songRouter = require('./song.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/todos', toDoRouter);
router.use('/songs', songRouter);

module.exports = router;