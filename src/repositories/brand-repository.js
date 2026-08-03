const mongoose = require('mongoose');
const Brand = mongoose.model('Brand');

exports.get = async () => Brand.find({}, 'name country');

exports.getById = async (id) => Brand.findById(id, 'name country');

exports.create = async (data) => {
  const brand = new Brand(data);
  await brand.save();
};

exports.update = async (id, data) => Brand.findByIdAndUpdate(id, data, { new: true });

exports.delete = async (id) => Brand.findByIdAndDelete(id);