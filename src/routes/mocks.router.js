import {Router} from "express";
import mocksController from '../controllers/mocks.controller.js';
/*import { generateMockUsers, generateMockPets } from "../services/mocking.services.js";*/

const router = Router();

router.get('/mockingpets', mocksController.getMockPets);
router.get('/mockingusers', mocksController.getMockUsers);
router.post('/generateData', mocksController.generateData)

/*router.get("/mocks", (req, res) => {
    const users = generateMockUsers(50);
    res.json(users);
});

router.get("/mocks", (req, res) => {
    const users = generateMockPets(100);
    res.json(pets);
});*/

/*router.get("/users/:num?", (req, res) => {
    const num = parseInt(req.params.num) || 50;
    const users = generateMockUsers(num);
    res.json({ status: "success", payload: users });
});

router.get("/pets/:num?", (req, res) => {
    const num = parseInt(req.params.num) || 100;
    const pets = generateMockPets(num);
    res.json({ status: "success", payload: pets });
});*/

export default router;