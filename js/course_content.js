window.onload = function(){
    let banner = document.querySelectorAll(".banner")
    // let product_detail_txt = document.querySelectorAll(".rtl")
    for(let i=0; i < banner.length; i++){
        banner[i].classList.add("active");
        // product_detail_txt[i].classList.add("active");

    }
}
$(document).ready(function(){
    $(document).scroll(function (){
        sale_box_appear()
        skill_box_txt_appear();
        skill_box_img_appear();
    })
    function sale_box_appear(){
        let sale_box_outerHeight = $('.sale_box').outerHeight();
        let sale_box_offsetTop = $('.sale_box').offset().top;
        if (scrollY + innerHeight - sale_box_outerHeight / 4 > sale_box_offsetTop) {
            $('.sale_box>.txt_box').addClass('active')
            $('.sale_box>.info_box').addClass('active')
          }else{
            $('.sale_box>.txt_box').removeClass('active')
            $('.sale_box>.info_box').removeClass('active')
          }
    }
    function skill_box_txt_appear(){
        let skill_box_txt_outerHeight = $('.skill_box>.txt_box').outerHeight();
        let skill_box_txt_offsetTop = $('.skill_box>.txt_box').offset().top;
        if (scrollY + innerHeight - skill_box_txt_outerHeight / 4 > skill_box_txt_offsetTop) {
            $('.skill_box>.txt_box').addClass('active')
          }else{
            $('.skill_box>.txt_box').removeClass('active')
          }
    }
    function skill_box_img_appear(){
        let skill_box_img_outerHeight = $('.skill_box>.img_box').outerHeight();
        let skill_box_img_offsetTop = $('.skill_box>.img_box').offset().top;
        if (scrollY + innerHeight - skill_box_img_outerHeight / 4 > skill_box_img_offsetTop) {
            $('.skill_box>.img_box').addClass('active')
          }else{
            $('.skill_box>.img_box').removeClass('active')
          }
    }
})