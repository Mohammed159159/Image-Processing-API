import supertest from "supertest";
import app from "../../src/index";

const request = supertest(app);

describe("1. Suite for testing index.ts", () => {
    it("a. Should start server wtih status code 200 at main route", async () => {
        const response = await request.get("/");
        expect(response.status).toBe(200);
    });

    it("b. Should start server with status code 200 at images route", async () => {
        const response = await request.get(
            "/images/?width=40&height=500&name=encenadaport"
        );
        expect(response.status).toBe(200);
    });
});
