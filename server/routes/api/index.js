const router = require("express").Router()
const jobRoutes = require("./job.routes")
const userRoutes = require("./user.routes")
const trackerRoutes = require("./tracker.routes")


router.use("/user", userRoutes)
router.use("/job", jobRoutes)
router.use("/tracker", trackerRoutes)


module.exports = router