const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __process.cwd() + '/public/img')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
}) 

const uploader = multer ({storage})

module.exports = uploader 