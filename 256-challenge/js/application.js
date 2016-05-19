$(document).ready(function() {
  mi_game = new Game(str8);

  //$('#row0').find('td').first().text(mi_game.checkCell(0,0));
  fillInCells();

  $('body').on('keyup', function(e){
    if (e.keyCode === 38){
      mi_game.moveUp();
      fillInCells();
    } else if (e.keyCode === 39){
      alert('right')
    } else if (e.keyCode === 40){
      mi_game.moveDown();
      fillInCells();
    } else if (e.keyCode === 37){
      mi_game.moveLeft();
      fillInCells();
    } else{}
  });
});

var fillInCells = function(){
  col = 0;
  for (var row = 0; row < 4; row++){

    $('#row'+row.toString()).find('td').each(function(col){
      $(this).text(mi_game.checkCell(row,col));
    });
    col += 1;

  }
};
