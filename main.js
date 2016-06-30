
$('.dropMenu li ').click(function(evt) {
$(evt.target).children('p').slideToggle();

});


$('.dropMenu li').click(function(evt) {
   $(evt.target).children('p').trigger("hover");
});

$('.dropMenu li').hover(function() {
  $(evt.target).css("background-color","red");
});
