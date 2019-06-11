  var to,t1,timetaken,color,letters;
  var left,top,width,height;

  var performance=window.performance;
  setTimeout(makeshapeppear,(Math.random()*3000));

    function makeshapeppear(){

      document.getElementById("shape").style.display="block";
      if(Math.random()>0.5){
        document.getElementById("shape").style.borderRadius="50%";
      }
      else document.getElementById("shape").style.borderRadius="0%";

      letters = '0123456789ABCDEF'.split('');

      color = '#';


      for (var i = 0; i < 6; i++ ) {

          color += letters[Math.floor(Math.random() * 16)];

      }
      document.getElementById("shape").style.backgroundColor=color;

      left=Math.random()*600+"px";
      top=Math.random()*600+"px";
      width=Math.random()*200+100+"px";


      document.getElementById("shape").style.top=top;
      document.getElementById("shape").style.left=left;
      document.getElementById("shape").style.width=width;

      document.getElementById("shape").style.height=width;
      t0=performance.now();


    }
    function delay(){
      setTimeout(makeshapeppear,(Math.random()*500));
    }

    document.getElementById("shape").onclick=function(){
      t1=performance.now();
      timetaken=(t1-t0)/1000;
      document.getElementById("timet").innerHTML=timetaken+" s";
      document.getElementById("shape").style.display="none";
      if(timetaken>1){
        document.getElementById("toolate").innerHTML="You Lost!!";
        endloop();

      }
      else{
        delay();
      }
    }
