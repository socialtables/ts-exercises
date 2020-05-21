import express from "express";
import superagent from "superagent";

let server: any;
const port = 9989

describe("exercise 8 - augmenting types", () => {
    beforeAll((done) => {
        const app = express()

        app.use((req, res, next) => {
            // stuff that would auth a user would go here;
            req.ctx = { user: { firstname: "Grace", lastname: "Hopper"}};
            next();
        });

       app.get('/', (req, res) => res.json({msg: `Hello ${req.ctx?.user?.firstname}!`}));

       server = app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
       done();
    })

    afterAll(async () => {
        return server.close();
    });

    test("hit an express route", async () => {
        const { body } = await superagent.get(`http://localhost:${port}`);
        console.log(body);
    })
})