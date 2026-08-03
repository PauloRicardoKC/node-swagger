const mongoose = require('mongoose');
const Car = mongoose.model('Car');

exports.get = async () => Car.find({}, 'model color price').populate('brand', 'name country');

exports.getById = async (id) => Car.findById(id, 'model color price').populate('brand', 'name country');

exports.create = async (data) => {
  const car = new Car(data);
  await car.save();
};

exports.update = async (id, data) => Car.findByIdAndUpdate(id, data, { new: true });

exports.delete = async (id) => Car.findByIdAndDelete(id);