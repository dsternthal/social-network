const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtResponse,
  removeThoughtResponse,
} = require('../../controllers/thoughtController');

// /api/ThoughtsgetThoughts
router.route('/').get(getThoughts).post(createThought);

// /api/ThoughtsgetThoughts/:ThoughtId
router
  .route('/:ThoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/ThoughtsgetThoughts/:ThoughtId/responses
router.route('/:ThoughtId/responses').post(addThoughtResponse);

// /api/ThoughtsgetThoughts/:ThoughtId/responses/:responseId
router.route('/:ThoughtId/responses/:responseId').delete(removeThoughtResponse);

module.exports = router;
