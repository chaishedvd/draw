$(document).ready(function() {

  $('.dropdown').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    $('.dropdown').toggleClass('active');
    $('.dropdown-open').slideToggle();
  });
});
 //Swiper JS
var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  direction:'horizontal',
  autoplay: {
      delay: '1500',
},
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 //放致順序 會影響效果的顯現
 //1.載入CSS
 //2.載入Jquery核心
 //3.載入效果插件*當上面網頁內容全部載入好之後再來載入效果*
 //4.載入自己寫的all.js 
  
})