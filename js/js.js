

$('.tab-list').each(function(){
  var $this = $(this);
  var $tab = $this.find('li.active');
  var $link = $tab.find('a');
  var $panel = $($link.attr('href'));

  $this.on('click', '.tab-control', function(e){
    e.preventDefault();

    var $link = $(this);
    var id = this.hash;

    if (id && !$link.is('.active')){
      $panel.removeClass('active');
      $tab.removeClass('active');

      $panel = $(id).addClass('active');
      $tab = $link.parent().addClass('active');
    }

  });
});


$(window).bind('load resize', function(){
  winWidth = $(window).innerWidth();
  toggleTabMenu(winWidth);
});


function toggleTabMenu(winWidth){
  if (winWidth < 650){
    $('.tab-list').hide();
    $('.responsive-tab-menu').on('click', function(e){
      e.preventDefault();
      $('.tab-list').toggle();
    });
  } else {
    $('.tab-list').show();
  }
}
