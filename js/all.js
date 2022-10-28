// ------index.html banner動畫----
window.onload = function(){
    let banner_slidein = document.getElementsByClassName("banner_slidein");
    let banner_fadein = document.getElementsByClassName("banner_fadein");
    let banner_bg = document.getElementsByClassName("index_banner");
    for(let i=0; i < banner_slidein.length; i++){
        banner_slidein[i].classList.add("active");
    }
    for(let i=0; i < banner_fadein.length; i++){
        banner_fadein[i].classList.add("active");
    }
    for(let i=0; i < banner_bg.length; i++){
        banner_bg[i].style.opacity=1;
    }
}
// -----index.html slogan動畫 jQuery-----
$(document).ready(function(){
    $(window).ready(function(){
        carousel(1)
    })
    // scroll事件發生
    $(window).scroll(function(){
        slideIn()
        fadeIn()
        new_arrivals()
        schoolLocation()
        shopLoaction()
        loacationTitle()
        discount()
    })
    // -----slogan 動畫-----
    function slideIn(){
        let outerHeight = $('#slogan_img').outerHeight();
        let offsetTop = $('#slogan_img').offset().top;
        if(scrollY + innerHeight - outerHeight / 3 > offsetTop){
            $('#slogan_img').addClass('active')
        }else{
            $('#slogan_img').removeClass('active')
        }
    }
    function fadeIn(){
        let outerHeight = $('#slogan_txt').outerHeight();
        let offsetTop = $('#slogan_txt').offset().top;
        if(scrollY + innerHeight - outerHeight / 3 > offsetTop){
            $('#slogan_txt').addClass('active')
        }else{
            $('#slogan_txt').removeClass('active')
        }
    }
    // -----new arrivel動畫-----
    function new_arrivals(){
        let outerHeight = $('.new_arrivals > .title_box').outerHeight();
        let offsetTop = $('.new_arrivals > .title_box').offset().top;
        if(scrollY + innerHeight - outerHeight * 2 > offsetTop){
            $('.new_arrivals .title_box').addClass('active')
        }else{
            $('.new_arrivals .title_box').removeClass('active')
        }
    }
    // -----location動畫-----
    function loacationTitle(){
        let outerHeight = $('.location > .title_box > .item').outerHeight();
        let offsetTop = $('.location > .title_box > .item').offset().top;
        if(scrollY + innerHeight - outerHeight * 0.9 > offsetTop){
            $('.location .title_box > .item').addClass('active')
        }else{
            $('.location .title_box > .item').removeClass('active')
        }
    }
    function schoolLocation(){
        let outerHeight = $('.location').outerHeight();
        let offsetTop = $('.location').offset().top;
        if(scrollY + innerHeight - outerHeight / 3 > offsetTop){
            $('.line1').addClass('active')
            $('.school').addClass('active')
        }
        else{
            $('.line1').removeClass('active')
            $('.school').removeClass('active')
        }

    }
    function shopLoaction(){
        let outerHeight = $('.location').outerHeight();
        let offsetTop = $('.location').offset().top;
        if(scrollY + innerHeight - outerHeight / 3 * 2 > offsetTop){
            $('.shop').addClass('active')
            $('.line2').addClass('active')
        }
        else{
            $('.shop').removeClass('active')
            $('.line2').removeClass('active')
        }
    }
    // ----discount動畫-----
    // ---一般效果---
    function discount(){
        let outerHeight = $('.discount').outerHeight();
        let offsetTop = $('.discount').offset().top;
        if(scrollY + innerHeight - outerHeight / 3 > offsetTop){
            $('.discount > .item').addClass('active')
        }
        else{
            $('.discount > .item').removeClass('active')
        }
    }
    // ---彈跳效果----
    // function discount(){
    //     let outerHeight = $('.discount').outerHeight();
    //     let offsetTop = $('.discount').offset().top;
    //     if(scrollY + innerHeight - outerHeight < offsetTop){
    //         $('.discount > .item').stop(true).animate({
    //             left:'50%',
    //         },400,'easeOutQuint')
    //     }
    //     else{
    //         $('.discount > .item').animate({
    //             left:"-100%",
    //         },400,'easeOutQuint')
    //     }
    // }
    // -----slogan 輪播圖-----
    let carouselBtn = document.querySelectorAll("input.carousel_btn");
    function carousel(i){
        setTimeout(
            function(){
                carouselBtn[i].click();
                i++;
                if(i <= 2){
                    carousel(i);
                }
                if(i > 2){
                    let i = 0;
                    carousel(i);
                }
            }
            ,4000
        );
    }
    }
)
// index.html slogan動畫
window.addEventListener("scroll", function(){
// slogan輪播圖
let carouselBtn = document.querySelectorAll("input.carousel_btn");

function carousel(i){
    setTimeout(
        function(){
            carouselBtn[i].click();
            i++;
            if(i <= 2){
                carousel(i);
            }
            if(i > 2){
                let i = 0;
                carousel(i);
            }
        }
        ,4000
    );
}
// window.addEventListener("load",carousel(1));

  
  // ----loacation background-------
  $('.shop').mouseover(function(){
      $('.location #coffee_shop_bg').css({
          opacity:".6",
      })
      }).mouseout(function(){
          $('.location #coffee_shop_bg').css({
              opacity:"0",
          })
  })
  $('.school').mouseover(function(){
      $('.location #coffee_school_bg').css({
          opacity:".6",
      })
      }).mouseout(function(){
          $('.location #coffee_school_bg').css({
              opacity:"0",
          })
  })
});
// index.html location 動畫




