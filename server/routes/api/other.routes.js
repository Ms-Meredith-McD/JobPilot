const router = require("express").Router()

const {
    getOtherById,
    createOther,
    updateOtherById,
    deleteOtherById
} = require("../../controller/other.controller")


router.get("/:id", async (req, res) => {
    try {
        const payload = await getOtherById(req.params.id)
        res.status(200).json({ status: "success", payload })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ status: "error", payload: err.message })
    }
})

router.post("/", async (req, res) => {
    try {
        const payload = await createOther(req.body)
        res.status(200).json({ status: "success", payload })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ status: "error", payload: err.message })
    }
})

router.put("/:id", async (req, res) => {
    try {
        const payload = await updateOtherById(req.params.id, req.body)
        res.status(200).json({ status: "success", payload })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ status: "error", payload: err.message })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const payload = await deleteOtherById(req.params.id)
        res.status(200).json({ status: "success", payload })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ status: "error", payload: err.message })
    }
})

module.exports = router;