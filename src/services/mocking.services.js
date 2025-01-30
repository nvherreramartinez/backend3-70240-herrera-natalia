import { faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";

export const generateMockPets = (count = 100) => {
    let pets = [];
    for (let i = 0; i < count; i++) {
        pets.push({
            id: faker.database.mongodbObjectId(),
            name: faker.animal.petName(),
            specie: faker.animal.type(),
            age: faker.number.int({ min: 1, max: 20 }),
            adopted: false,
            owner: null,
        });
    }
    return pets;
};

export const generateMockUsers = (count = 50) => {
    let users = [];
    for (let i = 0; i < count; i++) {
        users.push({
            id: faker.database.mongodbObjectId(),
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            phone: faker.phone.number(),
            email: faker.internet.email(),
            password: createHash("coder123"),
            pets: []
        });
    }
    return users;
};

/*export default { 
    generateMockPets, 
    generateMockUsers, 
};*/