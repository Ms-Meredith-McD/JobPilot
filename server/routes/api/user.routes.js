const router = require("express").Router()
const jwt = require("jsonwebtoken")
require("dotenv").config()

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  handleLogin
} = require("../../controllers/user.controller")

// tokens are encrypted non-invasive data about the user 
function createToken(id) {
  return jwt.sign({ id: id }, process.env.JWT_SECRET)
}
router.get("/", async (req, res) => {
  try {
    const payload = await getAllUsers()
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const payload = await getUserById(req.params.id)
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

router.post("/", async (req, res) => {
  try {
    const payload = await createUser(req.body)
    const token = createToken({ _id: payload._id, username: payload.username })
    console.log(token)
    res.status(200).cookie("auth_cookie", token).json({ status: "success", payload })
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

router.post("/login", async (req, res) => {
  try {
    const payload = await handleLogin(req.body.email, req.body.password)
    const token = createToken({ _id: payload._id, username: payload.username })
    res.status(200).cookie("auth_cookie", token).json({ status: "success", payload })
  } catch (err) {
    console.log(err.message)
    res.status(401).json({ status: "error", payload: "Could not authorize." })
  }
})

router.post("/logout", async (req, res) => {
  try {
    res.status(200).cookie("auth_cookie", "").json({ status: "success" })
  } catch (err) {
    console.log(err.message)
    res.status(401).json({ status: "error", payload: "Could not logout." })
  }
})

router.put("/:id", async (req, res) => {
  try {
    const payload = await updateUserById(req.params.id, req.body)
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const payload = await deleteUserById(req.params.id)
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

module.exports = router;