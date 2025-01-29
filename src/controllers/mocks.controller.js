import { generateMockPets, generateMockUsers } from "../services/mocking.services.js";


const getMockPets = (req, res) => {
    const pets = mockingService.generateMockPets(100);
    res.json(pets);
};

const getMockUsers = (req, res) => {
    const users = mockingService.generateMockUsers(50);
    res.json(users);
};

const generateData = async (req, res) => {
    try {
        const { users, pets } = req.body;
        const mockUsers = mockingService.generateMockUsers(users);
        const mockPets = mockingService.generateMockPets(pets);

        res.json({ message: "Datos generados correctamente", mockUsers, mockPets });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default { 
    getMockPets, 
    getMockUsers, 
    generateData 
};