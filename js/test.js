$('#start').on("click touchstart", function(event) {
    if (event.type == "touchstart") {
        $(this).off('click').on('click', function(e) {
            e.preventDefault();
        });
        count_touch();
    } else {
        count_click();
    }

});

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
        alert("倒數結束");
        clearInterval(countdownid);
        countdownnumber = 6;
    }
    countdownnumber--;
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


// $(".item a").click(function(){
//   // $(this).parent().parent().siblings().find('a').removeClass('active')
//   // $(this).addClass('active');
//   // console.log($(this).parent().parent().find('clone'))
//   // $('.imgChange').replace('background', $(this).find('img').attr('src')) 
//   // console.log($('.imgChange').attr('background-url'))
// });
var currenturl = '';
$('#role-owl-carousel').on('click', '.item a', function () {
    currentImg = $(this).find('img').attr('src');
    $(this).parent().parent().siblings().children(".item").children('a').removeClass('focus');
    $(this).addClass('focus');
    //取代原本的img
    $('.imgChange').css('background','url('+ currentImg +')');
    // console.log($(this).find('img').attr('data-id'));
});

$('.submitRole').click(function(){
    $('#character').css('display','none');
    $('#game').css('display','block');
   
});