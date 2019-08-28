
// var $ = require("jquery");

$(function(){
  $('.firstblock-btn').on('click', function(){
    $('.firstblock').fadeOut(1000);
    $('.wrapper').fadeIn(1000);
    
    $("#fullpage").fullpage({
      navigation: true,
      navigationPosition: 'left',
   });

   $(this).css('top','10%');

  })

  $('.firstblock-btn-mobile').on('click', function(){
    $('.firstblock').fadeOut(1000);
    $('.wrapper').fadeIn(1000);
    
    $("#fullpage").fullpage({
      navigation: true,
      navigationPosition: 'left',
   });
  })
  

  $('.wrapper-btn').on('click', function(){
    
    
    $('.wrapper').css('display', 'none')
    $('.firstblock').fadeIn();
    $.fn.fullpage.destroy('all');

    $('.firstblock-btn').css('top','50%');
  })
})
