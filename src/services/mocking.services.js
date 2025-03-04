import { faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";
import { usersService } from "../services/index.js";


class MockingService {
    static async generateMockingUsers(num){
        const users = [];
        for (let i = 0; i < num; i++) {
            const user = {
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                password: await createHash("coder123"),
                role: faker.helpers.arrayElement(["user", "admin"]),
                pets: []
            };
            users.push(user);
        }
        return users;
    }

    static async saveMockingUsers(num) {
        const users = await this.generateMockingUsers(num);
        const savedUsers = await usersService.createMany(users);
        return savedUsers;
    }

    static async generateMockingPets(num){
        const pets = [];
        for (let i = 0; i < num; i++) {
            pets.push({
                name: faker.animal.petName(),
                specie: faker.animal.type(),
                age: faker.number.int({ min: 1, max: 20 }),
                adopted: false,
                owner: null,
            })
        }
        return pets;
    }
}
export default MockingService;

    /*getMockPets(req, res) {
        res.send(generateMockPets());
    }

    getMockUsers(req, res) {
        res.send(generateMockUsers());
    }

    generateData(req, res) {
        const { pets, users } = req.body;
        res.send({
            pets: generateMockPets(pets),
            users: generateMockUsers(users),
        });
    }
}*/
/*const generateMockPets = (count = 100) => {
    let pets = [];
    for (let i = 0; i < count; i++) {
        pets.push({
            name: faker.animal.petName(),
            specie: faker.animal.type(),
            age: faker.number.int({ min: 1, max: 20 }),
            adopted: false,
            owner: null,
        });
    }
    return pets;
};

/*export const generateMockUsers = (count = 50) => {
    let users = [];
    for (let i = 0; i < count; i++) {
        users.push({
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            phone: faker.phone.number(),
            email: faker.internet.email(),
            password: createHash("coder123"),
            role: faker.helpers.arrayElement(["user", "admin"]),
            pets: []
        });
    }
    return users;
};

export default { 
    generateMockPets, 
    generateMockUsers, 
};*/
