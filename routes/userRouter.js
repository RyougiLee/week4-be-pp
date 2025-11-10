const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth');


const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/userController')

// Middleware to parse JSON
router.use(express.json());

// ROUTES
// GET /tours
router.get("/", getAllUsers);


router.use(auth);
// POST /tours
router.post("/", createUser);

// GET /tours/:tourId
router.get("/:userId", getUserById);

// PUT /tours/:tourId
router.put("/:userId", updateUser);

// DELETE /tours/:tourId
router.delete("/:userId", deleteUser);

module.exports = router
