export class Order {
  constructor(
    _id,
    id_user,
    totalOrder,
    totalQuantity,
    status,
    date,
    orderItems,
  ) {
    this._id = _id;
    this.id_user = id_user;
    this.totalOrder = totalOrder;
    this.totalQuantity = totalQuantity;
    this.status = status;
    this.date = date;
    this.orderItems = orderItems;
  }
}
