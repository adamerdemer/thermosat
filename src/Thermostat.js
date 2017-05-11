function Thermostat(){
  this.temperature = 20;
  this.MinTemp = 10;
  this.MaxTemp = 25;
  this.DefaultTemp = 20;
  this.PowerSavingOn = true;
}

Thermostat.prototype.UpTemp = function () {
  this.temperature ++;
};

Thermostat.prototype.DownTemp = function() {
  this.temperature --;
};

Thermostat.prototype.PowerSaving = function () {
  if (this.PowerSavingOn) {
    this.MaxTemp = 32;
    this.PowerSavingOn = false;
  } else {
    this.MaxTemp = 25;
    this.PowerSavingOn = true;
  }
};

Thermostat.prototype.Reset = function () {
  this.temperature = this.DefaultTemp;
};
