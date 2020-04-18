const User = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signUp = async (req, res, next) => {
    const { userName, name, password } = req.body
    console.log('entered', req.body)
    try {
        if (!userName || !name || !password) throw { error: `Missing field` }

        const doesExit = await User.findOne({ userName })
        if (doesExit) return res.status(403).json({ err: 'Username Exists' })

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({ ...req.body, password: hashedPassword })
        const newUser = await user.save()
        if (!newUser) throw new Error
        return res.status(201).json(newUser)

    } catch (e) {
        res.status(500).json({ err: e.error })
    }
}

exports.signIn = async (req, res, next) => {
    const { userName, password } = req.body
    try {
        if (!userName || !password) throw { error: 'Username or password cannot be empty' }
        const user = await User.findOne({ userName })

        if (!user) throw { error: 'User doesn\'t exist' }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) throw { error: 'Invalid Credentials' }

        const token = await jwt.sign({ userName, id: user._id }, process.env.SECRET_KEY, { expiresIn: '100h' })
        if (!token) throw { error: 'Something went wrong' }

        return res.status(200).json({ user, token })

    } catch (error) {
        console.log(error)
        res.status(500).json({ err: error.error })
    }
}