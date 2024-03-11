const router = require("express").Router()

const {
  getTrackerById,
  createTracker,
  updateTrackerById,
  deleteTrackerById
} = require("../../controller/tracker.controller")


router.get("/:id", async (req, res) => {
  try {
    const payload = await getTrackerById(req.params.id)
    res.status(200).json({ status: "success", payload })
  }catch(err){
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

router.post("/", async (req, res) => {
  try {
    const payload = await createTracker(req.body)
    res.status(200).json({ status: "success", payload })
  }catch(err){
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

router.put("/:id", async (req, res) => {
  try {
    const payload = await updateTrackerById(req.params.id, req.body)
    res.status(200).json({ status: "success", payload })
  }catch(err){
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const payload = await deleteTrackerById(req.params.id)
    res.status(200).json({ status: "success", payload })
  }catch(err){
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

module.exports = router;