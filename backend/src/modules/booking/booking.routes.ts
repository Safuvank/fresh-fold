// import express from "express";

// import { createBookingHandler } from "./booking.controller.js";

// const router = express.Router();

// router.post("/", createBookingHandler);

// export default router;

import express from "express";

import { createBookingHandler } from "./booking.controller.js";

import { verifyToken } from "../auth/auth.middleware.js";

const router = express.Router();

router.post("/", verifyToken, createBookingHandler);

export default router;
