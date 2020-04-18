const User = require('../model/user')
const jwt = require('jsonwebtoken')

exports.isAuth = (req, res, next) => {
    const token = req.get('Authorization')

    if (!token) return res.status(403).json({ error: 'Invalid Token' })
    try {

        const verifiedUser = jwt.verify(token, process.env.SECRET_KEY)
        req.creator = verifiedUser.id

    } catch (error) {
        return res.status(error.status || 500).json({ error: error.message || 'Something went wrong!' })
    }
    next()
}