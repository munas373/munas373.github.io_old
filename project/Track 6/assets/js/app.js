$('.nav-item').click(function() {
    var button_name = $(this).data('button');
  
    $('.content').attr('class', 'column content');
    $('.content').addClass(button_name);
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
    $('.about-text').addClass('hide');
  });
  
  $('.close').click(function() {
    $('.slay').addClass('hide');
    $('.nav-item').removeClass('active');
    $('audio')[0].pause();
  });