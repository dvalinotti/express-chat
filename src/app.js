import 'core-js/stable'
import 'regenerator-runtime/runtime'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import config from './config'
dotenv.config()

import indexRouter from './routes/index'

// Init express app
const app = express()

// Install express middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())

// Logging middleware
const debug = process.env.DEBUG
if (debug) app.use(logger('dev'))

// Security config
app.use(helmet())
app.disable('x-powered-by')

// CORS Middleware config
app.use(cors(config.cors))

// API Route declarations
app.use('/', indexRouter)

// error handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500
  err.status = err.status || 'error'

  res.status(err.statusCode).json({
    ...err,
    message: err.message
  })
})

export default app
