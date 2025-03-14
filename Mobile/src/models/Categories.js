export class Categories {
  constructor(_id, name, images) {
    this._id = _id || '';
    this.name = name || 'Chưa có tên';
    this.images = images || '';
  }
}
