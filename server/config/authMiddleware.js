const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../model/UserModel')

const routeProtection = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, "shams123")
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      return res.status(401).send("Not Authorized")
    }
  }

  if (!token) {
    res.status(401).send("No Token")
  }
})

module.exports = { routeProtection }