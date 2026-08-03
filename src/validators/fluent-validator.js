function ValidationContract() {
  this.errorsList = [];
}

ValidationContract.prototype.isRequired = function isRequired(value, message) {
  if (value === undefined || value === null || String(value).trim().length === 0) {
    this.errorsList.push({ message });
  }
};

ValidationContract.prototype.hasMinLen = function hasMinLen(value, min, message) {
  if (value === undefined || value === null || String(value).length < min) {
    this.errorsList.push({ message });
  }
};

ValidationContract.prototype.hasMaxLen = function hasMaxLen(value, max, message) {
  if (value === undefined || value === null || String(value).length > max) {
    this.errorsList.push({ message });
  }
};

ValidationContract.prototype.isFixedLen = function isFixedLen(value, len, message) {
  if (value === undefined || value === null || String(value).length !== len) {
    this.errorsList.push({ message });
  }
};

ValidationContract.prototype.isEmail = function isEmail(value, message) {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!reg.test(String(value || ''))) {
    this.errorsList.push({ message });
  }
};

ValidationContract.prototype.errors = function errors() {
  return this.errorsList;
};

ValidationContract.prototype.clear = function clear() {
  this.errorsList = [];
};

ValidationContract.prototype.isValid = function isValid() {
  return this.errorsList.length === 0;
};

module.exports = ValidationContract;