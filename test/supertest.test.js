import supertest from "supertest";
import { expect } from "chai";
import { describe } from "mocha";

const requester = supertest("http://localhost:8080");


describe("Testeando la App Web Adoptame", () => {
    describe ("Testing de Adoptame", () => {
        it("Endpoint GET/api/adoptions traer todas las mascotas", async () => {
        const {status, _body} = await requester.get("/api/adoptions")
        expect(status).to.equal(200);
        expect(_body.payload).to.be.an("array");
        })
        it("Debe arrojar un error 404 si la ruta no existe", async () => {
            const {status} = await requester.get("/api/adoptions/deberiafallar")
            expect(status).to.equal(404);
        })
        it("Buscar una adopción por ID", async () => {
            let idAdoption = "67c64f9bb9355d232bcc5084";
            const {status, _body} = await requester.get(`/api/adoptions/${idAdoption}`);
            expect(status).to.equal(200);
            expect(_body.payload).to.have.property("_id").that.equals(idAdoption);
        })
        it("Crear una adopción", async (req, res) => {
            let uId = "67c64afa470e921ce0433f56";
            let pId = "67c617ddd891167174ddf5d2";
            const {status, _body} = await requester.post(`/api/adoptions/${uId}/${pId}`);
            expect(status).to.equal(201);
            //expect(_body.payload).to.have.property("userId").that.equals(userId);
            //expect(_body.payload).to.have.property("petId").that.equals(petId);
        })
    })
})