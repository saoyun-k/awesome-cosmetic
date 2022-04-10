$(document).ready(function() {
  $('.drawer').drawer();
  $('button').on('click', function() {
    if($('.drawer--right').hasClass('drawer-open')) {
      $('.siteTitle').addClass('change');
    } else {
      $('.siteTitle').removeClass('change');
    }
  });
});




