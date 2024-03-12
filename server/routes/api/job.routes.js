const router = require("express").Router()

const {
  getAllJobs,
  getJobById,
  getJobs,
  createJob,
  updateJobById,
  deleteJobById
} = require("../../controller/job.controller.js")

router.get("/", async (req, res) => {
  try {
    const payload = await getAllJobs()
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const payload = await getJobById(req.params.id)
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

router.get("/user/:userId", async (req, res) => {
  try {
    const payload = await getJobs(req.params.userId);
    console.log(req.params.userId);
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

router.post("/", async (req, res) => {
  try {
    console.log('req.body', req.body)
    const payload = await createJob(req.body)
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

router.put("/:id", async (req, res) => {
  try {
    const payload = await updateJobById(req.params.id, req.body)
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const payload = await deleteJobById(req.params.id)
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

module.exports = router;