// ------course.html banner動畫----
window.onload = function(){
    let course_txt = document.querySelectorAll(".course_banner>.txt_box")
    let course_img = document.querySelectorAll(".course_banner>.img_box")
    for(let i=0; i < course_txt.length; i++){
        course_txt[i].classList.add("active");
        course_img[i].classList.add("active");

    }
}

$(document).ready(function(){
    $(document).scroll(function () {
        benfit_appear()
        best_experience_appear()
        feedback_appear()
        main_course_appear()
      })
    function benfit_appear(){
        let benfit_outerHeight = $('.benfit').outerHeight();
        let benfit_offsetTop = $('.benfit').offset().top;
        if (scrollY + innerHeight - benfit_outerHeight / 4 > benfit_offsetTop) {
            $('.benfit').addClass('active')
          }else{
            $('.benfit').removeClass('active')
          }
    }
    function best_experience_appear(){
        let best_experience_outerHeight = $('.best_experience').outerHeight();
        let best_experience_offsetTop = $('.best_experience').offset().top;
        if (scrollY + innerHeight -  best_experience_outerHeight / 4 >  best_experience_offsetTop) {
            $('.best_experience').addClass('active')
          }else{
            $('.best_experience').removeClass('active')
          }
    }
    function feedback_appear(){
        let feedback_outerHeight = $('.feedback').outerHeight();
        let feedback_offsetTop = $('.feedback').offset().top;
        if (scrollY + innerHeight -  feedback_outerHeight / 4 >  feedback_offsetTop) {
            $('.feedback').addClass('active')
          }else{
            $('.feedback').removeClass('active')
          }
    }
    function main_course_appear(){
        let main_course_outerHeight = $('.main_course').outerHeight();
        let main_course_offsetTop = $('.main_course').offset().top;
        if (scrollY + innerHeight -  main_course_outerHeight / 6 >  main_course_offsetTop) {
            $('.main_course').addClass('active')
          }else{
            $('.main_course').removeClass('active')
          }
    }
})