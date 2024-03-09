const router = require("express").Router()
const jobRoutes = require("./job.routes")
const userRoutes = require("./user.routes")
const notesRoutes = require("./notes.routes")
const trackerRoutes = require("./tracker.routes")
const fileLinkRoutes = require("./fileLink.routes")

router.use("/user", userRoutes)
router.use("/job", jobRoutes)
router.use("/tracker", trackerRoutes)
router.use("/notes", notesRoutes)
router.use("/filelink", fileLinkRoutes)

module.exports = router