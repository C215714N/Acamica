const express = require(`express`)
const router = express.Router()
const productController = require(`../controller/product`)
const {adminAuth, authAccess} = require(`../middleware/auth`)
/* Product Routes */
    router.post   ( `/`,     adminAuth,  productController.create  )
    router.get    ( `/`,     authAccess, productController.list    )
    router.get    ( `/:id`,  authAccess, productController.find    )
    router.put    ( `/:id`,  adminAuth,  productController.update  )
    router.delete ( `/:id`,  adminAuth,  productController.delete  )
module.exports = router