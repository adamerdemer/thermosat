describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('thermostat starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase the temperature with an up function',function(){
    thermostat.UpTemp();
    expect(thermostat.temperature).toEqual(21);
  });

  it('can decrease the temperature with a down function', function() {
    thermostat.DownTemp();
    expect(thermostat.temperature).toEqual(19);
  });

  it("thermostat's minimum temperature is 10 degrees", function(){
    expect(thermostat.MinTemp).toEqual(10);
  });

  describe('PowerSavingOn', function() {
    it('if true the maximum temperature is set to 25 degrees', function() {
      expect(thermostat.MaxTemp).toEqual(25);
    });

    it('if false the maximum temperature is set to 32 degrees', function(){
      thermostat.PowerSaving();
      expect(thermostat.MaxTemp).toEqual(32);
    });
  });

  it('Reset function resets the temperature to the default temperature of 20 degrees', function() {
    thermostat.Reset();
    expect(thermostat.temperature).toEqual(20);
  });

  describe('Energy usage', function(){
    it('gives low usage when the temperature is below 18 degrees', function(){
      for (i = 0; i < 3; i++) {
        thermostat.DownTemp();
      }
      expect(thermostat.Usage()).toBe("low-usage");

    });

  });
});
