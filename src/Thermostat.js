function Thermostat () {
  this.temperature = 20;
}

Thermostat.prototype.increase = function (delta) {
  delta = delta || 1;
  this.temperature+= delta;
};

Thermostat.prototype.decrease = function (delta) {
    delta = delta || 1;
  this.temperature-= delta;
};
