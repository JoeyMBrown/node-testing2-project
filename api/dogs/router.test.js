const request = require('supertest')
const server = require('../server');
const db = require('../../data/db-config');

it('correct env var', () => {
    expect(process.env.NODE_ENV).toBe("testing")
})


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
    test('adds dog to db', async () => {
        await request(server)
            .post('/api/dogs')
            .send({ dog_name: 'joey', dog_age: '22'})

        const dogs = await db('dogs')

        expect(dogs).toHaveLength(7)
    }, 600)

    test('Added dog name and dog age to db', async () => {
        const res = await request(server)
            .post('/api/dogs')
            .send({ dog_name: 'Jebbadiah', dog_age: 6})
        expect(res.body).toMatchObject({ dog_id: 7, dog_name: 'Jebbadiah', dog_age: 6})
    })
})

describe("[DELETE] / - deletes dog", () => {
    it("removes joke from db", async () => {
        const res = await request(server)
            .delete('/api/dogs/1')

        expect(res.body).toEqual(
    [
        {
            "dog_id": 2,
            "dog_name": "Max",
            "dog_age": 4
        },
        {
            "dog_id": 3,
            "dog_name": "Buck",
            "dog_age": 7
        },
        {
            "dog_id": 4,
            "dog_name": "Jordan",
            "dog_age": 2
        },
        {
            "dog_id": 5,
            "dog_name": "Fighto",
            "dog_age": 1
        },
        {
            "dog_id": 6,
            "dog_name": "Dog name Im not creative",
            "dog_age": 8
        }])
    })
    it("responds with an array with an array of all of the dogs, except the deleted dog", async () => {
            const res = await request(server)
                .delete('/api/dogs/1')
    
            expect(res.body).toEqual(
        [
            {
                "dog_id": 2,
                "dog_name": "Max",
                "dog_age": 4
            },
            {
                "dog_id": 3,
                "dog_name": "Buck",
                "dog_age": 7
            },
            {
                "dog_id": 4,
                "dog_name": "Jordan",
                "dog_age": 2
            },
            {
                "dog_id": 5,
                "dog_name": "Fighto",
                "dog_age": 1
            },
            {
                "dog_id": 6,
                "dog_name": "Dog name Im not creative",
                "dog_age": 8
            }])
    })
})