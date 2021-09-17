const request = require('supertest')
const router = require('./dogs-router');
const db = require('../../data/db-config');

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

describe('[POST] /api/dogs', () => {
    test('responds with the newly created dog', async () => {
        const res = await request(router)
            .post('/api/dogs')
            .send({ dog_name: 'joey', dog_age: '22'})
        expect(res.body).toMatchObject({dog_id: 7, dog_name: 'joey', dog_age: '22'})
    }, 600)

    test('responds with a 400 if req.body isnt formatted properly', async () => {
        const res = await request(router)
            .post('api/dogs')
            .send({ dog_name: 'Jebbadiah'})
        expect(res.body).toMatchObject({ message: 'Be sure to have a dog name and age!', status: 400})
    })
})