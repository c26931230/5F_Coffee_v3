// --menu.html---
$(document).ready(function () {
  $('.menu_bar .item').addClass('active')
  $('.menu_bar .menu_slogan').addClass('active')
  // ----scroll-----
  $(document).scroll(function () {
    button_appear()
  })
  //----- menu.html 換介紹----
  $('#switch_menu').click(function () {
    if ($('.front').hasClass('rotate')) {
      $('.front').removeClass('rotate')
    } else { $('.front').addClass('rotate') }
  })
  $('.front').mouseenter(function () {
    if ($(this).hasClass('rotate')) {
      $(this).removeClass('rotate')
    } else { $(this).addClass('rotate') }
  }
  ).mouseleave(function () {
    if ($(this).hasClass('rotate')) {
      $(this).removeClass('rotate')
    } else { $(this).addClass('rotate') }
  })
  button_appear()
  //   -----menu clicked me button section fadin-----
  function button_appear() {
    let coffee_outerHeight = $('#coffee').outerHeight();
    let coffee_offsetTop = $('#coffee').offset().top;
    let pastry_outerHeight = $('#pastry').outerHeight();
    let pastry_offsetTop = $('#pastry').offset().top;
    let tea_OuterHeight = $('#tea').outerHeight();
    let tea_OffsetTop = $('#tea').offset().top;
    if (scrollY + innerHeight - coffee_outerHeight / 4 > coffee_offsetTop) {
      $('#switch_menu').addClass('active')
      $('#coffee').addClass('active')
    }else{
      $('#coffee').removeClass('active')
    }
    if (scrollY + innerHeight - pastry_outerHeight / 4 > pastry_offsetTop) {
      $('#pastry').addClass('active')
    }else{
      $('#pastry').removeClass('active')
    }
    if (scrollY + innerHeight - tea_OuterHeight / 4 > tea_OffsetTop) {
      $('#tea').addClass('active')
    }else{
      $('#tea').removeClass('active')
    }
  }
})


