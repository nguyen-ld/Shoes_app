export class User {
  constructor(
    _id,
    username,
    password,
    numberphone,
    images,
    email,
    fullname,
    sex,
    date,
    address,
  ) {
    this._id = _id || null;
    this.username = username || null;
    this.password = password || null;
    this.numberphone = numberphone || null;
    this.images = images || null;
    this.email = email || null;
    this.fullname = fullname || null;
    this.sex = sex || null;
    this.date = date || null;
    this.address = address || [];
  }
}
