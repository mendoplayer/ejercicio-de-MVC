const {Router} = require("express");
const router = Router();
const file = require("../controllers/files");
const path = require ('path');
const multer = require ('multer');
const upload = multer({storage: multer.diskStorage({
    destination: (req,file,cb) => (null, path.resolve (__dirname, '../../uploads')) ,
    filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now () + path.extname(file.originalname))
})})

router.get("/",file.upload)

router.post ('/',[upload.any()],file.store)


module.exports = router