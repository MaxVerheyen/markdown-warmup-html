$(document).ready(function(){
    $("a.fancybox").fancybox({
          openEffect: "none",
          closeEffect: "none",
          arrows: true,
          keyboard: true,
          'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
              return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
          }
      });
      
      $(".zoom").hover(function(){ 
          $(this).addClass('transition');
      }, function(){
          
      $(this).removeClass('transition');
      });
  });