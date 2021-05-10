import express from 'express'
import { ValidationError } from '../errors'
import { indexSchema } from '../schema'

const router = express.Router()

/**
 * [GET] /
 * ------------------------
 * Example endpoint.
 */
router.get('/', async function (req, res, next) {
  res.render('index', { title: 'Express' })
})

/**
 * [POST] /
 * ------------------------
 * Example endpoint.
 */
router.post('/', async function (req, res, next) {
  try {
    const { error } = indexSchema.validate(req.body)
    if (error) {
      throw new ValidationError(error)
    }
    return res.status(200).send()
  } catch (err) {
    next(err)
  }
})

export default router
