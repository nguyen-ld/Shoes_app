export class CartItems {
  constructor(
    _id,
    id_product,
    id_cart,
    id_size,
    quantity,
    priceCurrent,
    images,
    totalCart,
  ) {
    this._id = _id || null;
    this.id_product = id_product || null;
    this.id_cart = id_cart || null;
    this.id_size = id_size || null;
    this.priceCurrent = priceCurrent || null;
    this.quantity = quantity || null;
    this.images = images || null;
    this.totalCart = totalCart;
  }
}
