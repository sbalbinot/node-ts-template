import setupStaticFiles from '@/main/config/static-files'
import setupSwagger from '@/main/config/swagger'
import setupMiddlewares from '@/main/config/middlewares'
import setupRoutes from '@/main/config/routes'
import express from 'express'

const app = express()
setupStaticFiles(app)
setupSwagger(app)
setupMiddlewares(app)
setupRoutes(app)
export default app
