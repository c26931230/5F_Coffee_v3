$(function(){
    // faq收合動畫
    $('.faq_btn').each(function(){
        let line1 =  $(this).find('span').first();
        let ans_box = $(this).parent().parent().next();//class="ans_box"
        $(this).click(function(){
             if(line1.hasClass('active')){
                line1.removeClass('active')
                ans_box.slideUp(500)
        }else{
                line1.addClass('active')
                ans_box.slideDown(500)
        }
        })      
    })
})

