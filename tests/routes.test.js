import request from 'supertest'
import app from '../src/app'
import config from './fixture'

jest.setTimeout(10000)

describe('API Routes', () => {
  config.routes.forEach((test) => {
    it(`${test.path} - ${test.title}`, async () => {
      const res = await request(app)[test.method](test.path).send(test.body)
      expect(res).toBeDefined()
      expect(res.status).toEqual(test.expectedCode)
    })
  })
})
