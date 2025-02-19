const { Router } = require("express");
const userRouter = require("./userRouter");

const router = Router();

router.get('/',userRouter);

module.exports = router;