$(document).ready( function () {
  thermostat = new Thermostat();
  $( "button[name='increase']" ).click(function( event ) {
    thermostat.increase();
    alert( "It's getting hot in here!" );
    $("h2[name='currentTemperatur']").html(thermostat.getCurrentTemperature() + " °C");
        helper();
  });

  $( "button[name='decrease']" ).click(function( event ) {
    thermostat.decrease();
    alert( "It's freeeezin'!" );
    $("h2[name='currentTemperatur']").html(thermostat.getCurrentTemperature() + " °C");
        helper();
  });

  $( "button[name='reset']" ).click(function( event ) {
    thermostat.reset();
    alert( "Back to da roots!" );
    $("h2[name='currentTemperatur']").html(thermostat.getCurrentTemperature() + " °C");
        helper();
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

var helper = function(){
if(thermostat.currentEnergyUsage() === 'low-usage'){
  $('#currentEnergyUsage').css({'background-color': 'green'});
} else if(thermostat.currentEnergyUsage() === 'high-usage') {
  $('#currentEnergyUsage').css({'background-color': 'red'});
    } else {
  $('#currentEnergyUsage').css({'background-color': 'black'});
}}
$.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=d24e620a4fda44872b67c02a8b7b4001&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
})


});
