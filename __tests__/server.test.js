const app = require('../src/server/index') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)
describe("test server", () => {
    it('gets the test endpoint', async done => {
        const response = await request.get('/test')
        expect(response.status).toBe(200)
        expect(response.body.message).toBe('pass!')
        done()
    })
    it('return project data', async done => {
        const response = await request.get('/all')
        expect(response.status).toBe(200)
        expect({})
        done()
    })
})
