const express = require("express");
const router = express.Router();
const bookControl = require("../controlers/bookControler");

router.get("/", bookControl.getMovie);

router.get("/:id", bookControl.getOne);

router.post("/", bookControl.postNew);

router.patch("/:id", bookControl.patchBook);

router.delete("/:id", bookControl.deleteBook);

module.exports = router;
