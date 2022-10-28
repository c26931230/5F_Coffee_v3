// ------cart.html 動畫----
window.onload = function(){
    let cart_wrap = document.querySelectorAll(".shopping_cart>.wrap")
    let cart_sum = document.querySelectorAll(".shopping_cart>.sum")
    for(let i=0; i < cart_wrap.length; i++){
        cart_wrap[i].classList.add("active");
        cart_sum[i].classList.add("active");

    }
}