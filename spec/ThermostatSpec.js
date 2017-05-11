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
});
