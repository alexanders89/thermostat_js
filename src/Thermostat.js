function Thermostat () {
  this.MIN_TEMP = 10;
  this.MAX_ECO_TEMP = 25;
  this.MAX_REG_TEMP = 32;
  this.temperature = 20;
  this.powerSaving = true;
}

Thermostat.prototype.increase = function (delta) {
  delta = delta || 1;
  if (this.temperature + delta > this.maxTempCheck()) {
    throw new Error('That is too much!');
  };
  this.temperature+= delta;
};

Thermostat.prototype.decrease = function (delta) {
  delta = delta || 1;
  if (this.temperature - delta < this.MIN_TEMP) {
    throw new Error('That is too cold, brrrr!');
  };
  this.temperature-= delta;
};

Thermostat.prototype.switchPowerSaving = function () {
  if (this.powerSaving) {
      this.powerSaving = false;
  } else {
      this.powerSaving = true;
  };
};

Thermostat.prototype.maxTempCheck = function () {
  if (this.powerSaving) {
    return this.MAX_ECO_TEMP;
  } else {
    return this.MAX_REG_TEMP;
  };
};
