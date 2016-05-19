var finished = false;

var race = function(player){
  var $ya_mutha = $(document).find('.'+player);
  var $next = $ya_mutha.next();
  if ($next.prop('nodeName') == 'TD'){
    $ya_mutha.removeClass();
    $next.addClass(player);
  }
  else {
    //alert('a winner is ' + player);
    finished = true;
    console.log('race_winner_'+player);
    $("#winners-circle").addClass('race_winner_'+player)
  }

}

$(document).ready(function() {
  console.log('yoooo');
  $(document).on('keyup', function(e){

    if (finished == false) {
      if (e.which === 65){
        race('diddy');
      }

      if (e.which === 66){
        race('timber');
      }

      if (e.which === 76){
        race('banjo');
      }
    }
  });

  $("#restart").on('submit', function(e){
    location.reload();
  });


});
