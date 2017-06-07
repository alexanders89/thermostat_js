function Thermostat () {
  this.DEFAULT_TEMP = 20
  this.MIN_TEMP = 10;
  this.MAX_ECO_TEMP = 25;
  this.MAX_REG_TEMP = 32;
  this.temperature = this.DEFAULT_TEMP;
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

Thermostat.prototype.reset = function () {
  this.temperature = this.DEFAULT_TEMP;
}

Thermostat.prototype.currentEnergyUsage = function (){
  if (this.temperature < 18){
    return('low-usage')
  } else if(this.temperature >= 25){
      return('high-usage')
  } else {
      return('medium-usage')
     }
};
