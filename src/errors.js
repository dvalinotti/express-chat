/**
 * User input validation error class
 */
export class ValidationError extends Error {
  constructor(error) {
    super(error.message)
    this.statusCode = 400
    this.status = 'error'
    this.message = 'ValidationError'
    this.issues = error.details
  }
}
