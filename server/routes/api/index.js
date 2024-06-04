const router = require("express").Router()
const jobRoutes = require("./job.routes")
const userRoutes = require("./user.routes")
const trackerRoutes = require("./tracker.routes")
const uploadRoutes = require ("./upload.routes")

router.use("/user", userRoutes)
router.use("/job", jobRoutes)
router.use("/tracker", trackerRoutes)
router.use("/upload", uploadRoutes)

module.exports = router