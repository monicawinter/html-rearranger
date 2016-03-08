var $newH1 = $('<h1>');
$newH1.html('Below ground veggies');
$('body').prepend($newH1);

var $belowveggies = $('<ul>');
$('body').append($belowveggies);

var $aboveH1 = $('<h1>');
$aboveH1.html('Above ground veggies');
$('body').append($aboveH1);

var $aboveveggies = $('<ul>');
$('body').append($aboveveggies);

$('ul li').each(function () {
  if ($(this).hasClass('below')){
    $belowveggies.append($(this))
  } else {
    $aboveveggies.append($(this))
  }
});
