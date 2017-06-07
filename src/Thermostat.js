const MIN_TEMP = 10;

function Thermostat () {
  this.temperature = 20;
  this.powerSaving = true;
}

Thermostat.prototype.increase = function (delta) {
  delta = delta || 1;
  this.temperature+= delta;
};

Thermostat.prototype.decrease = function (delta) {
  delta = delta || 1;
  if (this.temperature - delta < MIN_TEMP) {
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
