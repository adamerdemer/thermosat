function Thermostat(){
  this.temperature = 20;
  this.MinTemp = 10;
  this.MaxTemp = 25;
}

Thermostat.prototype.UpTemp = function () {
  this.temperature ++;
};

Thermostat.prototype.DownTemp = function() {
  this.temperature --;
};
