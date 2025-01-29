import { faker } from "@faker-js/faker";

export const generateMockPets = () => {
    return {
        id:faker.animal.mongodbObjectId(),
        name:faker.animal.name(),
        specie:faker.animal.specie(),
        age:faker.animal.age({min:1, max:20}),
        adopted: false,
        owner: null,
    }
}

export const generateMockUsers = () => {
    return {
        id: faker.database.mongodbObjectId(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        sex: faker.person.sex(),
        birthDate: faker.date.birthdate(), 
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        image: faker.image.avatar(),
        pets: []
    }
}

