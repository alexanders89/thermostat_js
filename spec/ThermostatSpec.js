describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Thermostat is initialized at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });
});
