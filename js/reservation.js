window.onload = function(){
    let reservation_txt = document.querySelectorAll(".reservation>.txt_box")
    let reservation_img = document.querySelectorAll(".reservation>.img_box")
    let reservation_form = document.querySelectorAll(".reservation>.form_box")
    for(let i=0; i < reservation_txt.length; i++){
        reservation_txt[i].classList.add("active");
        reservation_img[i].classList.add("active");
        reservation_form[i].classList.add("active");

    }
}
$(document).ready(function(){
    $(document).scroll(function () {
        // benfit_appear()
        // best_experience_appear()
        // feedback_appear()
        // main_course_appear()
        slogan_box_appear()
      })
      
      function slogan_box_appear(){
        let slogan_box_img_outerHeight = $('.slogan_box>.wrap>.img_box').outerHeight();
        let slogan_box_img_offsetTop = $('.slogan_box>.wrap>.img_box').offset().top;
        let slogan_box_txt_outerHeight = $('.slogan_box>.wrap>.txt_box').outerHeight();
        let slogan_box_txt_offsetTop = $('.slogan_box>.wrap>.txt_box').offset().top;
        if (scrollY + innerHeight - slogan_box_img_outerHeight / 6 > slogan_box_img_offsetTop) {
            $('.slogan_box>.wrap>.img_box').addClass('active')
          }else{
            $('.slogan_box>.wrap>.img_box').removeClass('active')
          }
        if (scrollY + innerHeight - slogan_box_txt_outerHeight / 6 > slogan_box_txt_offsetTop) {
            $('.slogan_box>.wrap>.txt_box').addClass('active')
          }else{
            $('.slogan_box>.wrap>.txt_box').removeClass('active')
          }
    }
})