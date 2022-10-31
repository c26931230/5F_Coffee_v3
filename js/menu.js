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
    if (scrollY + innerHeight - coffee_outerHeight / 4 > coffee_offsetTop) {
      $('#switch_menu').addClass('active')
    }else{
      $('#switch_menu').removeClass('active')
    }
  }
})


// menu_bar data
Vue.createApp({
  data(){
    return{
      product:[
        {
          id:1,
          title:"pastry",
          image:"image/pastry.jpg",
          href:"#pastry"
        },
        {
          id:2,
          title:"coffee",
          image:"image/coffee.jpg",
          href:"#coffee"
        },
        {
          id:3,
          title:"tea",
          image:"image/tea.jpg",
          href:"#tea"
        },
      ]
    }
  }
}).mount(".menu_bar")

// coffee data
Vue.createApp({
  data(){
    return{
      product:[
        {
          id:1,
          title:"Americano",
          desq:"Esprseeo/Water",
          image:"image/coffee1.jpg",
          price:5.99,
        },
        {
          id:2,
          title:"Espresso",
          desq:"Only Espresso",
          image:"image/coffee2.jpg",
          price:5.99,
          icon:"fa-solid fa-mug-hot"
        },
        {
          id:3,
          title:"Cold Brew",
          desq:"Made by steeping ground coffee in room-temperature water for several hours.",
          image:"image/coffee3.jpg",
          price:5.99,
          icon:"fa-solid fa-snowflake"
        },
        {
          id:4,
          title:"Hot Latte",
          desq:"Espresso / Milk / Foam",
          image:"image/coffee4.jpg",
          price:5.99,
          icon:"fa-solid fa-mug-hot"
        },
        {
          id:5,
          title:"Ice Latte",
          desq:"Espresso / Milk / Foam",
          image:"image/coffee5.jpg",
          price:5.99,
          icon:"fa-solid fa-snowflake"
        },
        {
          id:6,
          title:"Mocha",
          desq:"Espresso / Chocolate / Milk / Whipped Cream",
          image:"image/coffee6.jpg",
          price:5.99,
        },
        {
          id:7,
          title:"Cappuccino",
          desq:"Espresso / Milk / Foam",
          image:"image/coffee7.jpg",
          price:5.99,
        },
        {
          id:8,
          title:"Affogato",
          desq:"Espresso / Ice Cream",
          image:"image/coffee8.jpg",
          price:5.99,
          icon:"fa-solid fa-snowflake"
        },
        {
          id:9,
          title:"Espresso Romano",
          desq:"Espresso / Lemon / Soda Water",
          image:"image/coffee9.jpg",
          price:5.99,
          icon:"fa-solid fa-snowflake"
        },
        {
          id:10,
          title:"Pour Over Coffee",
          desq:"We offer all kinds of coffee beans!",
          image:"image/coffee10.jpg",
          price:5.99,
          
        }
      ]
    }
  }
}).mount("#coffee")

// pastry data
Vue.createApp({
  data(){
    return{
      product:[
        {
          id:1,
          title:"Americano",
          desq:"Esprseeo/Water",
          image:"image/pastry1.jpg",
          price:5.99,
        },
        {
          id:2,
          title:"Tiramisu",
          desq:"Espresso / Mascarpone / Cocoa Powder / Liqueur",
          image:"image/pastry2.jpg",
          price:5.99,
        },
        {
          id:3,
          title:"Ricciarelli",
          desq:"Almond /  Icing Sugar / Egg Whites",
          image:"image/pastry3.jpg",
          price:5.99,
        },
        {
          id:4,
          title:"Chocolate Fudge Cookies",
          desq:"Chocolate /  Butter / Egg / Cocoa Powder",
          image:"image/pastry4.jpg",
          price:5.99,
        },
        {
          id:5,
          title:"Strawberry Cake",
          desq:"Strawberry /  Cream / Egg",
          image:"image/pastry5.jpg",
          price:5.99,
        },
        {
          id:6,
          title:"Pancake",
          desq:"Milk /  Egg / Honey / Butter",
          image:"image/pastry6.jpg",
          price:5.99,
        },
      ]
    }
  }
}).mount("#pastry")

// tea data
Vue.createApp({
  data(){
    return{
      product:[
        {
          id:1,
          title:"Lemon Tea",
          desq:"Lemon / Black Tea / Syrup",
          image:"image/tea1.jpg",
          price:5.99,
          icon:"fa-solid fa-snowflake"
        },
        {
          id:2,
          title:"Matcha Latte",
          desq:"Matcha / Milk",
          image:"image/tea2.jpg",
          price:5.99,
        },
        {
          id:3,
          title:"Milk Tea",
          desq:"Milk / Black Tea / Syrup",
          image:"image/tea3.jpg",
          price:5.99,
        },
        {
          id:4,
          title:"Lavender Tea",
          desq:"Only Lavender Tea",
          image:"image/tea4.jpg",
          price:5.99,
          icon:"fa-solid fa-mug-hot"
        },
        {
          id:5,
          title:"Mint Tea",
          desq:"Mint / Black Tea / Soda Water",
          image:"image/tea5.jpg",
          price:5.99,
        },
        {
          id:6,
          title:"Yuenyeung",
          desq:"Coffee / Black Tea / Milk",
          image:"image/tea6.jpg",
          price:5.99,
        },
        
      ]
    }
  }
}).mount("#tea")