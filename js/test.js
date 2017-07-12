// $('#start').on("click touchstart", function(event) {
//     if (event.type == "touchstart") {
//         $(this).off('click').on('touchend', function(e) {
//             e.preventDefault();
//         });
//         count_touch();
//     } else {
//         count_click();
//     }

// });

var button = $('#start'),
    barline = $('.inline'),
    clickrange = $('#box1'),
    countTotal = $("#counter");

function count_click() {
    initial();
    button.css('display', 'none');
    var count = 0;
    clickrange.on("click", function(event) {
        count++;
        barline.css('width', count);
        countTotal.html(count);
        imgChange();
    });
    setTimeout(function() {
        clickrange.off('click')
        button.css('display', 'block');
    }, 5000);
}

function count_touch() {
    initial();
    button.css('display', 'none');
    var count = 0;
    clickrange.on("touchend", function(event) {
        count++;
        barline.css('width', count);
        countTotal.html(count);
        imgChange();
    });
    setTimeout(function() {
        clickrange.off('touchend')
        button.css('display', 'block');
    }, 5000);
}

function imgChange() {
    var currentImg = $('.imgChange');
    var isActive = $('.imgChange').hasClass('active');
    if (isActive) { //false
        currentImg.removeClass("active");
    } else { //true
        currentImg.addClass("active");
    }
}

//倒數
var countdownnumber = 5;
var countdownid, x;

function initial() {
    x = document.getElementById("countdown");
    console.log(x.innerHTML)
    x.innerHTML = countdownnumber;
    countdownnumber--;
    countdownid = window.setInterval(countdownfunc, 1000);
}

function countdownfunc() {
    x.innerHTML = countdownnumber;
    if (countdownnumber == 0) {
        alert("GAMEOVER");
        clearInterval(countdownid);
        countdownnumber = 6;
    }
    countdownnumber--;
}
//game 倒數
var countDownGame=3;
var countDownGameId,y;
function initial_game(){
  y=document.getElementById("number");
  y.innerHTML=countDownGame;
  countDownGame--;
  countDownGameId=window.setInterval(countdown,1000);
}
function countdown(){ 
  y.innerHTML=countDownGame;
  countDownGame--;
  if (y.innerHTML==0){
    y.innerHTML="STRAT";
  }
}



//owl 初始化
$('.owl-carousel').owlCarousel({
    margin: 20,
    responsiveClass: true,
    nav: true, //左右按鈕
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        568: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

var currenturl = '';
$('#role-owl-carousel').on('click', '.item a', function () {
    currentImg = $(this).find('img').attr('src');
    $(this).parent().parent().siblings().children(".item").children('a').removeClass('focus');
    $(this).addClass('focus');
    //取代原本的img
    $('.imgChange').css('background','url('+ currentImg +')');
    // console.log($(this).find('img').attr('data-id'));
});

// $('.submitRole').click(function(){
//     $('#character').css('display','none');
//     $('#game').css('display','block');
// });

$('.submitRole').on("click touchstart", function(event) {
    $('#character').css('display','none');
    $('#game').css('display','block');
    if (event.type == "touchstart") {
        $(this).off('click').on('touchend', function(e) {
            e.preventDefault();
        });
        $('#myModal').modal('show');
        initial_game();
        setTimeout(function() {
          hideModal();
          count_touch();
        }, 3000);
    } else {
        $('#myModal').modal('show');
        initial_game();
        setTimeout(function() {
          hideModal();
          count_click();
        }, 3000);
    }

});

function hideModal(){
    $("#myModal").removeClass("in");
    $(".modal-backdrop").remove();
    $("#myModal").hide();
}
