$(function(){
    // faq收合動畫
    $('.qus').each(function(){
        let line1 =  $(this).find('span').first();
        // let ans_box = $(this).parent().parent().next();//class="ans_box"
        let ans_box = $(this).next();//class="ans_box"
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

// faq item data
Vue.createApp({
    data(){
        return{
            question:[
                {
                id:1,
                qus:"Your baristas are awesome! Who can I share my experience with?",
                ans:"We are so grateful that our crew showed such compassion and love to you during your visit. You can share your experience with us at 07-2655-5555 or 5fcoffee@gmail.com.",
            },
                {
                id:2,
                qus:"Where do you source your coffee beans?",
                ans:"Our Private Reserve is a blend made of 100 percent Arabica beans from Brazil, Colombia and El Salvador.",
            },
                {
                id:3,
                qus:"My drink wasn’t made right!",
                ans:"Our drinks are guaranteed to satisfy! Any time you get a drink you aren’t happy with, please swing by the shop you visited and so we can make you a new drink! (Don't worry, it's on us!) If you aren’t able to get back to the shop, shoot us an email at 5fcoffee@gmail.com and we’ll get you taken care of!",
            },
                {
                id:4,
                qus:"What forms of payments do you accept?",
                ans:"We accept cash, all major credit cards and Apple Pay!",
            },
        ]
        }
    }
}).mount(".faq")
