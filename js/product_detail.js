// ------product.html 動畫----
window.onload = function(){
    let product_detail_img = document.querySelectorAll(".ltr")
    let product_detail_txt = document.querySelectorAll(".rtl")
    for(let i=0; i < product_detail_img.length; i++){
        product_detail_img[i].classList.add("active");
        product_detail_txt[i].classList.add("active");

    }
}
$(document).ready(function(){
    $(document).scroll(function (){
        recommend_appear()
    })
    function recommend_appear(){
        let product_recommend_outerHeight = $('.product_recommend').outerHeight();
        let product_recommend_offsetTop = $('.product_recommend').offset().top;
        if (scrollY + innerHeight - product_recommend_outerHeight / 4 > product_recommend_offsetTop) {
            $('.product_recommend').addClass('active')
          }else{
            $('.product_recommend').removeClass('active')
          }
    }
})