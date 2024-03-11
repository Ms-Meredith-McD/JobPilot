const router = require("express").Router()

const {
    updateOtherById,
} = require("../../controller/other.controller.js")


router.put("/:id", async (req, res) => {
    try {
        const payload = await updateOtherById(req.params.id, req.body)
        res.status(200).json({ status: "success", payload })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ status: "error", payload: err.message })
    }
})


module.exports = router;