$(document).ready(function(){

  $("#signin-div,#more").hover(function(){
    $(this).css("border-bottom", "2px solid blue");
  },function(){
    $(this).css("border-bottom", "2px solid white");
  });

  $("#bell-div").hover(function(){
    $(this).css("border-bottom", "2px solid black");
  },function(){
    $(this).css("border-bottom", "2px solid white");
  });

  $("#news").hover(function(){
    $(this).css("border-bottom", "2px solid yellow");
  },function(){
    $(this).css("border-bottom", "2px solid white");
  });

  $("#sports").hover(function(){
    $(this).css("border-bottom", "2px solid violet");
  },function(){
    $(this).css("border-bottom", "2px solid white");
  });

  $("#weather,#search").hover(function(){
    $(this).css("border-bottom", "2px solid gold");
  },function(){
    $(this).css("border-bottom", "2px solid white");
  });

  $("#iplayer").hover(function(){
    $(this).css("border-bottom", "2px solid silver");
  },function(){
    $(this).css("border-bottom", "2px solid white");
  });

  $("#tv").hover(function(){
    $(this).css("border-bottom", "2px solid red");
  },function(){
    $(this).css("border-bottom", "2px solid white");
  });

  $("#local-news,.thirdcontent").hover(function(){
    $(this).css("text-decoration", "underline");
  },function(){
    $(this).css("text-decoration", "none");
  });

});
