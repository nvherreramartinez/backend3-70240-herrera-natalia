import { Router } from "express";
import {generateMockUsers, generateMockPets} from "../utils/util.js";
const router = Router();

router.get("/", (req, res) => {
    const users = [];
    for (let i = 0; i < 50; i++) {
        users.push(generateMockUsers());
    }
    res.json(users);
});
router.get("/", (req, res) => {
    const pets = [];
    for (let i = 0; i < 100; i++) {
        pets.push(generateMockPets());
    }
    res.json(pets);
});

export default router;