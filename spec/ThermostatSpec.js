describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Thermostat is initialized at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('it allows the temperature to be increased by 1 degree', function(){
    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);
  })

  it('it allows the temperature to be decreased by 1 degree', function(){
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(19);
  })

  it('will not allow the temperatur to go below 10 degrees', function(){
    expect(function() {
      thermostat.decrease(11);
    }).toThrowError('That is too cold, brrrr!');
  });
});
