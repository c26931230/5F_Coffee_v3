$(function(){

    $('.faq_banner').css({
        transform:'translateY(0%)',
    })
    $('.faq_banner h2').css({
        transform:' scale(1)',
    })
    $('.faq_banner .search_bar').css({
        transform:'translateX(0%)',
    })
    $('.faq>.wrap>.item').css({
        // transform:' scale(1)',
        opacity: 1,
    })
    // faq收合動畫
    $('.faq_btn').each(function(){
        let line1 =  $(this).find('span').first();
        let ans_box = $(this).parent().parent().next();//class="ans_box"
        $(this).click(function(){
             if(line1.hasClass('active')){
                line1.removeClass('active')
                ans_box.slideUp(1000)
        }else{
                line1.addClass('active')
                ans_box.slideDown(1000)
        }
        })      
    })
})

