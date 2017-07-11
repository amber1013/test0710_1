$('#start').on("click touchstart", function(event) {
  if (event.type == "touchstart"){
    $(this).off('click').on('click', function(e){                     
    	e.preventDefault(); 
    });
    count_touch(); 
  }else{
    count_click();
  }
    
});

var button = $('#start'),
    barline = $('.inline'),
    clickrange = $('#box1'),
    countTotal = $("#counter");
    
function count_click(){
  initial();
  button.css('display','none');
  var count = 0;
  clickrange.on("click", function(event) {
    count++;
    barline.css('width',count);
    countTotal.html(count);
    imgChange();
  });
  setTimeout(function () {
      clickrange.off('click')
      button.css('display','block');
  }, 5000);
}
function count_touch(){
  initial();
  button.css('display','none');
  var count = 0;
  clickrange.on("touchend", function(event) {
    count++;
    barline.css('width',count);
    countTotal.html(count);
    imgChange();
  });
  setTimeout(function () {
      clickrange.off('touchend')
      button.css('display','block');
  }, 5000);
}

function imgChange(){
    var currentImg =  $('.imgChange');
    var isActive = $('.imgChange').hasClass('active');
    if(isActive){  //false
      currentImg.removeClass("active");
    }else{  //true
       currentImg.addClass("active");
    }
}

//倒數
var countdownnumber=5;
var countdownid,x;
function initial(){
  x=document.getElementById("countdown");
  console.log(x.innerHTML)
  x.innerHTML=countdownnumber;
  countdownnumber--;
  countdownid=window.setInterval(countdownfunc,1000);
}
function countdownfunc(){ 
  x.innerHTML=countdownnumber;
  if (countdownnumber==0){
    alert("倒數結束");
    clearInterval(countdownid);
    countdownnumber=6;
  }
  countdownnumber--;
}