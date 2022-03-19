import { noCache } from '@/main/middlewares'
import { Express } from 'express'
import request from 'supertest'

let app: Express

describe('No Cache Middleware', () => {
  beforeAll(async () => {
    app = (await import('@/main/config/app')).default
  })

  test('Should disable cache', async () => {
    app.get('/test_no_cache', noCache, (req, res) => {
      res.send()
    })
    await request(app)
      .get('/test_no_cache')
      .expect('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
      .expect('pragma', 'no-cache')
      .expect('expires', '0')
      .expect('Surrogate-Control', 'no-store')
  })
})
