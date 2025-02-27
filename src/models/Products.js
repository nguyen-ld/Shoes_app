export class Products {
  constructor(_id, name, images, id_categories, priceInitial, describe) {
    this._id = _id || null;
    this.name = name || null;
    this.images = images || null;
    this.id_categories = id_categories || null;
    this.priceInitial = priceInitial || null;
    this.describe = describe || null;
  }
}
