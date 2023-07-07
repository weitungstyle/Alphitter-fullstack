const passport = require('passport')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcryptjs')

const { User } = require('../models')

// set up Passport strategy
passport.use(new LocalStrategy(
  // customize user field
  {
    usernameField: 'account',
    passwordField: 'password',
    passReqToCallback: true
  },
  // authenticate user
  async (req, account, password, cb) => {
    const user = await User.findOne({ where: { account } })
    if (!user) {
      return cb(null, false, req.flash('error_messages', '帳號不存在或密碼輸入錯誤！'))
    }
    const res = await bcrypt.compare(password, user.password)
    if (!res) {
      const currentTime = Date.now()
      const lastFailedAt = user.lastFailedAt || 0
      const errorCount = user.errorCount || 0
      // 超過5分鐘重設錯誤次數
      if (currentTime - lastFailedAt > 60 * 1000 * 5) {
        await user.update({
          errorCount: 1,
          lastFailedAt: currentTime
        })
      } else if (errorCount >= 5) {
        return cb(null, false, req.flash('error_messages', '錯誤次數過多，請稍後再嘗試！'))
      } else {
        await user.update({
          errorCount: errorCount + 1,
          lastFailedAt: currentTime
        })
      }
      return cb(null, false, req.flash('error_messages', '帳號不存在或密碼輸入錯誤！'))
    }
    // await user.update({
    //   errorCount: 0
    // })
    return cb(null, user)
  }
))
// serialize and deserialize user
passport.serializeUser((user, cb) => {
  cb(null, user.id)
})
passport.deserializeUser((id, cb) => {
  return User.findByPk(id, {
    order: [['createdAt', 'DESC']],
    include: [
      { model: User, as: 'Followers' },
      { model: User, as: 'Followings' }
    ]
  })
    .then(user => cb(null, user.toJSON()))
    .catch(err => cb(err))
})

module.exports = passport
