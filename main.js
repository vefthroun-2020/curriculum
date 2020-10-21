$(document).ready(function(){
    var navWrap = $('.nav-wrap'),
      chapters = [],
      HEIGHT = $(window).height();
  
    $('.chapter').each(function(i){
      var title = $(this).find('h2').text();
      chapters[i] = {};
      chapters[i].obj = $(this);
      chapters[i].offset =       chapters[i].obj.offset().top;
      chapters[i].height = chapters[i].obj.height();
      navWrap.find('ul').append('<li>'+title+'</li>');
      navWrap.find('.bg').append('<div class="block"><div id="block-inner-'+i+'" class="block-inner"></div></div>');
      chapters[i].block = $('#block-inner-' + i);
    });
  
    function chapterScroll() {
      var scroll = $(window).scrollTop();
  
      for (var i = 0; i < chapters.length; i++) {
        var percentScrolled = (((scroll - (chapters[i].offset) + HEIGHT) / (chapters[i].height + HEIGHT) * 100) * 2)-1;
            
        chapters[i].block.css('transform', 'translateY('+percentScrolled+'%)' );
      }
    window.requestAnimationFrame(chapterScroll);
    }
  
    $('li').on('click', function(){
      var chosen = $(this).index();
      
      $('html').animate({scrollTop:chapters[chosen].offset}, '500');
    });
  
    chapterScroll();
    
    $(window).on('resize', function(){
      HEIGHT = $(this).height();
    });
  });
  
  