const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/comments/
router.route('/:userId').post(addThought);

// /api/comments/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
    // .route('/:thoughtId')
  .put(addReaction)
  .delete(removeThought);

// /api/comments/<pizzaId>/<commentId>/<replyId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
