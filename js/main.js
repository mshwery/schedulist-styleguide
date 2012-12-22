$(document).ready(function(){
  $('.trigger-popover').on('click', function(e){
    e.preventDefault();
    var popover = $(this).find(".popover");
    var marginLeft = $(this).outerWidth();
    popover.toggleClass('show').css('opacity', 0);
    var marginTop = (popover.outerHeight() / 2) - ($(this).outerHeight() / 2);
    console.log(marginTop);
    popover.css({'opacity': 1, 'margin-left': marginLeft, 'margin-top': -marginTop})
  });

  $('.popover').on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
  })
  .on('click', '.close', function(e){
    e.preventDefault();
    $(this).closest('.popover').removeClass('show');
  });

  $('.trigger-modal').on('click', function(e){
    var modal = $(this).attr('href');
    $(modal).modal();
  });

  $('.dropdown-toggle').on('click', function(e){
    $(this).closest('.dropdown').toggleClass('show');
  });
});
