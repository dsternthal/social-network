const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// /api/users
//https://localhost:3001/api/users/
//GET & POST
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
//Single GET
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

////api/users/:userId/Friends/:friendId

router.route('/:userId//friends/:friend:Id')
      .post(addFriend)
      .delete(removeFriend)

module.exports = router;
