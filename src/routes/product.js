const {Router} = require("express");
const router = Router();
const product = require("../controllers/product");
const path = require ('path');
const multer = require ('multer');
const upload = multer({storage: multer.diskStorage({
    destination: (req,file,cb) => (null, path.resolve (__dirname, '../../uploads')) ,
    filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now () + path.extname(file.originalname))
})})

router.get('/',product.index)

router.get('/create',product.create)

router.get('/:id',product.show)

router.get('/update/:id',product.update)

router.put('/:id',product.modify)

router.post('/',[upload.any()],product.save)

router.delete ('/',product.delete)


module.exports = router
