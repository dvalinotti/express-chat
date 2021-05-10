// Jest fixture config
import dotenv from 'dotenv'
dotenv.config()

export default {
  routes: [
    {
      title: 'index (GET)',
      path: '/',
      method: 'get',
      body: {},
      expectedCode: 200
    },
    {
      title: 'index (POST) - validation pass',
      path: '/',
      method: 'post',
      body: { message: 'Hello world!' },
      expectedCode: 200
    },
    {
      title: 'index (POST) - validation fail',
      path: '/',
      method: 'post',
      body: {},
      expectedCode: 400
    }
  ]
}
