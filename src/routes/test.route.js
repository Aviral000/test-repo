const router = require("express").Router();
const { add, get, update, deleted } = require("../controllers/test.controller");

router.post("/", add);
router.get("/", get);
router.delete("/:id", deleted);
router.put("/:id", update);

module.exports = router;