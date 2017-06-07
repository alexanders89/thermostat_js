$(document).ready( function () {
  thermostat = new Thermostat();
  $( "button[name='increase']" ).click(function( event ) {
    thermostat.increase();
    alert( "It's getting hot in here!" );
    $("h2[name='currentTemperatur']").html(thermostat.getCurrentTemperature() + " °C");
  });

  $( "button[name='decrease']" ).click(function( event ) {
    thermostat.decrease();
    alert( "It's freeeezin'!" );
    $("h2[name='currentTemperatur']").html(thermostat.getCurrentTemperature() + " °C");
  });

  $( "button[name='reset']" ).click(function( event ) {
    thermostat.reset();
    alert( "Back to da roots!" );
    $("h2[name='currentTemperatur']").html(thermostat.getCurrentTemperature() + " °C");
  });

  $( "button[name='switchPowerSaving']" ).click(function( event ) {
    thermostat.switchPowerSaving();
    alert( "Let's flip reverse!" );
    $("#powerSaving").html("PowerSaving: " + thermostat.powerSavingString());
  });

  // $( "h2[name='currentTemperatur']" ).text(text.replace('Current Temperature', thermostat.getCurrentTemperature));
  console.log(thermostat.getCurrentTemperature())
  $("h2[name='currentTemperatur']").html(thermostat.getCurrentTemperature() + " °C");
  $("#powerSaving").html("PowerSaving: " + thermostat.powerSavingString());
});
