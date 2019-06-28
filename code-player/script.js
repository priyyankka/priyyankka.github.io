$(document).ready(function(){


  let w=window.innerWidth;

  $("#topbar,#second,#third").css("width",0.99*w);
  $("#third").css("height",window.innerHeight*.86);

  $(".togglebutton").hover(
    function(){

      $(this).addClass("add");

    },
  function(){

    $(this).removeClass("add");

  });

  $( ".togglebutton" ).click(function() {
    $( this ).toggleClass( "active" );

    let panelid="#"+$(this).attr("id")+"panel";

    $(panelid).toggleClass("hidden");


    var items=4-$(".hidden").length;


    $(".panel").width(($(window).width()/items)-10);


  });

  function change(){
      $("iframe").contents().find( "html" ).html(
        "<html><head><style type='text/css'>"+$("#csspanel").val()+"</style></head><body>"+
        $("#htmlpanel").val()+"</body></head>"
      );
      document.getElementById("oppanel").contentWindow.eval($("#jspanel").val());

    }

  $("textarea,iframe").height($(window).height());
  change();


  $("textarea").on('change keyup paste', function() {
    change();

  });



})
