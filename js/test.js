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
  button.attr('disabled',true);
  var count = 0;
  clickrange.on("click", function(event) {
    count++;
    barline.css('width',count);
    countTotal.html(count);
    imgChange();
  });
  setTimeout(function () {
      clickrange.off('click')
      button.attr('disabled',false);
  }, 15000);
}
function count_touch(){
  button.attr('disabled',true);
  var count = 0;
  clickrange.on("touchend", function(event) {
    count++;
    barline.css('width',count);
    countTotal.html(count);
    imgChange();
  });
  setTimeout(function () {
      clickrange.off('touchend')
      button.attr('disabled',false);
  }, 15000);
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