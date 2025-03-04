import {Router} from "express";
import { getMockUsers, getMockPets } from '../controllers/mocks.controller.js';

const router = Router();

router.get('/mockingpets', getMockPets);
router.get('/mockingusers', getMockUsers);
//router.post('/generateData', mocksController.generateData)

export default router;