$(document).ready(function(){
  $('button').on('click', function(event){
    $target = $(event.target);
    $target.siblings().toggleClass('flipped');
  })
});
