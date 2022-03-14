const express = require('express');
const postController = require('../controllers/postController');
const auth = require('./auth');

const router = express.Router();

router
.route('/')
.get(auth, postController.findAll)
.post(auth, postController.create);

router
.route('/:id')
.get(auth, postController.findById)
.put(auth, postController.update);

module.exports = router;