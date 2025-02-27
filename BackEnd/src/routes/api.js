const express = require('express');
const router = express.Router();
//categories
const {
  addCategories,
  getListCategories,
} = require('../controllers/CategoriesControllers');
// size
const {
  addSize,
  getListSizeProduct,
} = require('../controllers/SizeControlllers');
// product
const {
  addProduct,
  getListProductByCategories,
  getInfoProductById,
} = require('../controllers/ProductControllers');
// gallery
const {
  addGalleryProduct,
  getListGalleryByIdProduct,
} = require('../controllers/GalleryProductControllers');
// favourite
const {
  addFavourite,
  getListFavourite,
  removeFavourite,
} = require('../controllers/FavouriteControllers');

// cart
const {
  addToCart,
  getListCartByIdUser,
  removeItemCart,
  updateQuantity,
} = require('../controllers/CartControllers');

//order
const {
  addOrder,
  getListOrder,
} = require('../controllers/OrderItemsControllers');
//upload
const upload = require('../middleware/uploads');
// user
const {
  addUser,
  addAddress,
  deleteAddress,
  updateAddress,
  getListAddressByUser,
  getInfoUser,
  updateInfo,
  infoAddressByUser,
  Login,
  register,
} = require('../controllers/UserControllers');
router.get('/test', (req, res) => {
  res.json({message: 'API is working!'});
});
// api categories
router.post('/addCategories', upload.single('images'), addCategories);
router.get('/getListCategories', getListCategories);
//api size
router.post('/addSize', addSize);
router.get('/getListSizeProduct', getListSizeProduct);
//api product
router.post('/addProduct', upload.single('images'), addProduct);
router.get('/getListProduct/:id_categories', getListProductByCategories);
router.get('/getInfoProductById/:id_product', getInfoProductById);
// api favoutite
router.post('/addFavourite', addFavourite);
router.get('/getListFavourite', getListFavourite);
router.delete('/removeFavourite/:id_product', removeFavourite);
//api gallery product
router.post('/addGalleryProduct', upload.single('images'), addGalleryProduct);
router.get('/getListImagesGallery/:id_product', getListGalleryByIdProduct);
//api cart
router.post('/addToCart', upload.single('images'), addToCart);
router.get('/getListCart/:id_user', getListCartByIdUser);
router.delete('/removeItem/:id_product', removeItemCart);
router.post('/updateQuantity', updateQuantity);
//api order
router.post('/addOrder', addOrder);
router.get('/getListOrder/:id_user/status/:status', getListOrder);
//api user
router.post('/addUser', addUser);
router.patch('/addAddress/:_id', addAddress);
router.delete('/users/:id_user/address/:id_address', deleteAddress);
router.patch('/updateAddress/:id_user/address/:id_address', updateAddress);
router.get('/getListAddress/:id_user', getListAddressByUser);
router.get('/getInfoUser/:id_user', getInfoUser);
router.patch('/updateInfo/:id_user', updateInfo);
router.get('/infoAddressByUser/:id_address', infoAddressByUser);
router.post('/login', Login);
router.post('/register', register);
module.exports = router;
