function Game(str) {
  str = str || 0;

  str_array = str.split('');
  var index = 0;
  this.arr = new Array(new Array(4), new Array(4), new Array(4), new Array(4));
  for(var i = 0; i < 4; i++){
    for(var j = 0; j < 4; j++){
      this.arr[i][j] = parseInt(str_array[index]);
      index += 1;
    }
  }

  this.toString();
};

Game.prototype.toString = function(){
  row0 = "";
  row1 = "";
  row2 = "";
  row3 = "";

  for(var i = 0; i < 4; i++){
    row0 = row0.concat(this.arr[0][i]);
  }
  for(var i = 0; i < 4; i++){
    row1 = row1.concat(this.arr[1][i]);
  }
  for(var i = 0; i < 4; i++){
    row2 = row2.concat(this.arr[2][i]);
  }
  for(var i = 0; i < 4; i++){
    row3 = row3.concat(this.arr[3][i]);
  }

  console.log(row0 + "\n" + row1 + "\n" + row2 + "\n" + row3);
}

Game.prototype.moveUp = function(){
  row = 3;
  col = 0;

  for (var i = 0; i < 4; i++){
    while (this.checkCell(row-1, col) != -1) {
      //console.log('yooo')
      // if this cell and previous cell are equal
      if (this.checkCell(row, col) === this.checkCell(row-1, col)){
        //console.log("this cell and previous cell are equal")
        // previous cell is now sum of these two cells
        this.arr[row-1][col] = this.arr[row-1][col] + this.arr[row][col];
        // current cell now zero
        this.arr[row][col] = 0;
      } else if (this.checkCell(row-1, col) == 0) {
        this.arr[row-1][col] = this.arr[row][col];
        this.arr[row][col] = 0;
      } else {

      }
      row = row - 1;
    };
    row = 3;
    col += 1;
  }

  // check for sandwiched zeroes in col 0
  if (this.arr[1][0] == 0 && this.arr[2][0] != 0) {
    this.arr[1][0] = this.arr[2][0];
    this.arr[2][0] = 0;
  }

  if (this.arr[2][0] == 0 && this.arr[3][0] != 0) {
    this.arr[2][0] = this.arr[3][0];
    this.arr[3][0] = 0;
  }

  // check for sandwiched zeroes in col 1
  if (this.arr[1][1] == 0 && this.arr[2][1] != 0) {
    this.arr[1][1] = this.arr[2][1];
    this.arr[2][1] = 0;
  }

  if (this.arr[2][1] == 0 && this.arr[3][1] != 0) {
    this.arr[2][1] = this.arr[3][1];
    this.arr[3][1] = 0;
  }

  // check for sandwiched zeroes in col 2
  if (this.arr[1][2] == 0 && this.arr[2][2] != 0) {
    this.arr[1][2] = this.arr[2][2];
    this.arr[2][2] = 0;
  }

  if (this.arr[2][2] == 0 && this.arr[3][2] != 0) {
    this.arr[2][2] = this.arr[3][2];
    this.arr[3][2] = 0;
  }

  // check for sandwiched zeroes in col 3
  if (this.arr[1][3] == 0 && this.arr[2][3] != 0) {
    this.arr[1][3] = this.arr[2][3];
    this.arr[2][3] = 0;
  }

  if (this.arr[2][3] == 0 && this.arr[3][3] != 0) {
    this.arr[2][3] = this.arr[3][3];
    this.arr[3][3] = 0;
  }

  this.toString();

};

Game.prototype.moveDown = function(){
  // row = 3;
  // col = 0;

  // check zeroes
  for(var col = 0; col < 4; col++){

    for(var row = 3; row > -1; row--){
      rowA = row;
      colA = col;
      while(rowA-1 > -1){

        if(this.checkCell(rowA,colA) === 0){
          console.log('yo')
          this.arr[rowA][colA] = this.arr[rowA-1][colA];
          this.arr[rowA-1][colA] = 0;
        }
        rowA -= 1;
        colA += 1;
      }
    }
  }

};

Game.prototype.moveLeft = function(){
  row = 0;


  for(var col = 0; col < 4; col++) {
    while(this.checkCell(row,col) === 0){

      console.log(row + " " + col)
      if(this.checkCell(row, col+1) != -1){
        console.log('ey')
        this.arr[row][col] = this.arr[row][col+1]
        this.arr[row][col+1] = 0;
      }
    }
  };
};

Game.prototype.checkCell = function(row, col){
  if(row < 0 || row > 3 || col < 0 || col > 3){
    return -1;
  } else {
    return this.arr[row][col];
  }
}

str1 = '0000000020002000';
str0 = '0000202000000000';
str2 = '0000200020002000';
str3 = '0000222200002222';
str4 = '2222222222222222';
str5 = '2020222022020202';
str6 = '2222222200000000';
str7 = '0000000000002222';
str8 = '0022002200220022'

// str2 = '0000
//         2222
//         0000
//         2222'
/*
0022
0022
0022
0022
*/


//mi_game.moveUp();


