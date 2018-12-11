$('.nav-item').click(function() {
    var button_name = $(this).data('button');
  
    $('.content').attr('class', 'column content');
    $('.content').addClass(button_name);
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
    $('.just').addClass('hide');
  });