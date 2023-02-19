const multer = require('multer')
const upload = multer({
  dest: 'temp/',
  fileFilter (req, file, cb) {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') return cb(null, true)

    const err = new Error('Only support .png/.jpg/.jpeg')
    return cb(err, false)
  }
 })

module.exports = upload
