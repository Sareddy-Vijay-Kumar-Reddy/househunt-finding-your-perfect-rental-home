const express = require("express");
const authMiddlware = require("../middlewares/authMiddlware");
const { getAllUsersController, handleStatusController, getAllPropertiesController, getAllBookingsController } = require("../controllers/adminController");

const router = express.Router()

router.get('/getallusers', authMiddlware, getAllUsersController)

router.post('/handlestatus', authMiddlware, handleStatusController)

router.get('/getallproperties', authMiddlware, getAllPropertiesController)

router.get('/getallbookings', authMiddlware, getAllBookingsController)

module.exports = router