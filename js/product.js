// -----price slider bar-----
const rangeInput = document.querySelectorAll(".range-input input");
const priceInput = document.querySelectorAll(".price-input input");
progress = document.querySelector(".slider .progress");
let min_price = document.getElementById("min_price");
let max_price = document.getElementById("max_price");
let priceGap = 10;
priceInput.forEach(input=>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(priceInput[0].value),
        maxVal = parseInt(priceInput[1].value);
        if((maxVal - minVal >= priceGap) && maxVal <= 2000){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minVal;
                progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            }else{
                rangeInput[1].value = maxVal;
                 progress.style.right = 100- (maxVal / rangeInput[1].max) * 100 + "%";
            }
            
        }
         
        
    })
    
})


rangeInput.forEach(input=>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if(maxVal - minVal < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap;
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
            
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100- (maxVal / rangeInput[1].max) * 100 + "%";
        }
        min_price.innerText = "$" + minVal; 
        max_price.innerText = "$" + maxVal; 
        
    })
    
})

// -----filter-----
$(document).ready(function(){
            
    $('#product_filter').click(function(){
        $('#product_aside').css({
            left:0,
            opacity:1,
        })
    })
    $('#filter_cancel').click(
        function(){
            $('#product_aside').css({
                left:'-100%'
            })
        }
    )
    let winWidth = $(window).width();
    if(($('#product_filter').is(":hidden")) && winWidth > 768) {
        $("#product_aside").show();  
        $('#product_filter').css({
            display:'none',
        });  
 } 
})



// -----?????????-----
var solid_heart = document.getElementById("solid_heart");
var regular_heart = document.getElementById("regular_heart");
function changeToSolidHeart(){
    solid_heart.style.display = "inline-block";
    regular_heart.style.display = "none";
}
function changeToRegHeartColor(){
    solid_heart.style.display = "none";
    regular_heart.style.display = "inline-block";
}
// -----???????????????-----

function showLarge(e){
    let small = e.target;
    document.getElementById("mainImg").src = small.src;
}
function init(){
    let imgs = document.querySelectorAll("#minor img");
    for(let i=0; i<imgs.length; i++){
        imgs[i].onclick = showLarge;
    }
}
// -----????????????----


$('.color_img').click(function(){
    $(this).css({
        border: '2px solid #333',
   })
   $('.color_img').not(this).css({
        border: '1px solid #333' 
   })
})
window.addEventListener("load",init,false);
   