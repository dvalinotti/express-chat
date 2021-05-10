import Joi from 'joi'

export const indexSchema = Joi.object({
  message: Joi.string().required()
})
