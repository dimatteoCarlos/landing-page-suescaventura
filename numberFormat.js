/**
 * Number.prototype.format(n, x, s, c)
 *
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   s: sections delimiter
 * @param mixed   c: decimal delimiter
 */

Number.prototype.format = function(n, x, s, c) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
      num = this.toFixed(Math.max(0, ~~n));

  return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};



var options = { style: "currency", currency: "USD" };
var numberFormat = new Intl.NumberFormat("us-US", options);
console.log(numberFormat.format(654321.987));

const options2 = { style: 'currency', currency: 'USD' };
const numberFormat2 = new Intl.NumberFormat('en-US', options2);

