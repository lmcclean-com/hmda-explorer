/* Add Commas to numbers (English style) */

function addCommas(nStr)
{
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
  x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

$('.charts .help').tooltip({
  title: function getTooltipTitle(){
    return $( this ).attr('title') || $( this ).next('.help-text').html();
  }
});
