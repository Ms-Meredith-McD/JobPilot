const router = require("express").Router()

const {
  getNoteById,
  createNote,
  updateNoteById,
  deleteNoteById
} = require("../../Controllers/notes.controller")


router.get("/:id", async (req, res) => {
  try {
    const payload = await getNoteById(req.params.id)
    res.status(200).json({ status: "success", payload })
  }catch(err){
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

router.post("/", async (req, res) => {
  try {
    const payload = await createNote(req.body)
    res.status(200).json({ status: "success", payload })
  }catch(err){
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

router.put("/:id", async (req, res) => {
  try {
    const payload = await updateNoteById(req.params.id, req.body)
    res.status(200).json({ status: "success", payload })
  }catch(err){
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const payload = await deleteNoteById(req.params.id)
    res.status(200).json({ status: "success", payload })
  }catch(err){
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

module.exports = router;