var color;

$(document).ready(function(){

  $(".boxes").on("click",function(){

    color=$(this).css("background-color");

  })

  $(".row").on("click",function(){
    $(this).css("background-color",color);
  });
});
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  $("#green").css("background-color", getRandomColor());
  $("#red").css("background-color", getRandomColor());
  $("#blue").css("background-color", getRandomColor());
}
