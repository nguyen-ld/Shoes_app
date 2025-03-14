class OrderItem {
  constructor(_id, id_order, id_product, priceCurrent, quantity) {
    this._id = _id;
    this.id_order = id_order;
    this.id_product = id_product;
    this.priceCurrent = priceCurrent;
    this.quantity = quantity;
  }
}
export default OrderItem;
