const request = require("supertest");
const app = require("../app")

const URL_BASE = '/api/v1/users'
let TOKEN

beforeAll(async () => {
    const user = {
        email: "sergio@gmail.com",
        password: "sergio1234",
    }

    const res = await request(app)
    .post(`${URL_BASE}/login`)
    .send(user)

    TOKEN = res.body.token

})

test("Get -> 'URL_BASE', should return status code 200 and res.body.length === 1", async () => {
    const res = await request(app)
        .get(URL_BASE)

    console.log(res.body);    

        expect(res.status).toBe(200)
})
