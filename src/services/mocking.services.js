import {faker} from "@faker-js/faker";
import { createHash}  from "../utils/index.js";

const generateMockPets = (count) => {
    let pets = [];
    for (let i = 0; i < 100; i++) {
        pets.push({
        id:faker.animal.mongodbObjectId(),
        name:faker.animal.name(),
        specie:faker.animal.specie(),
        age:faker.animal.age({min:1, max:20}),
        adopted: false,
        owner: null,
        });
    }
    return pets;
};

const generateMockUsers = (count) => {
    let users = [];
    for (let i = 0; i < 50; i++) {
        users.push({
        id: faker.database.mongodbObjectId(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        sex: faker.person.sex(),
        birthDate: faker.date.birthdate(), 
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: createHash("coder123"),
        image: faker.image.avatar(),
        pets: []
        });
    }
    return users;
};

export default {
    generateMockPets,
    generateMockUsers
};