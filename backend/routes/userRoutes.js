import { Router } from "express";
import multer from "multer";
import {
    updateUser,
    updateMetrics,
    fetchMetrics,
    fetchMatches,
    fetchChats,
    postEvents,
    fetchEvents,
    postRewards,
    fetchRewards,
    uploadProfilePhoto,
    deleteUser,
} from "../controllers/user/userController.js"

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/metrics", (req, res, next) => {
    console.log("POST /metrics hit");
    updateMetrics(req, res).catch(next);
});
router.get("/metrics", (req, res, next) => {
    fetchMetrics(req, res).catch(next);
})
router.get("/matches", (req, res, next) => {
    fetchMatches(req, res).catch(next);
})
router.post("/update", (req, res, next) => {
    updateUser(req, res).catch(next);
})
router.post("/upload-photo", upload.single('profileImage'), (req, res, next) => {
    uploadProfilePhoto(req, res).catch(next);
})
router.get("/chats", (req, res, next) => {
    fetchChats(req, res).catch(next);
})
router.post("/events", (req, res, next) => {
    postEvents(req, res).catch(next);
})
router.get("/events", (req, res, next) => {
    fetchEvents(req, res).catch(next);
})
router.post("/rewards", (req, res, next) => {
    postRewards(req, res).catch(next);
})
router.get("/rewards", (req, res, next) => {
    fetchRewards(req, res).catch(next);
})
router.delete("/delete/:username", (req, res, next) => {
    deleteUser(req, res).catch(next);
});

export default router;
