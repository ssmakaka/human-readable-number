
function toReadable(number) {
  const lowNumbers = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
  const hightNumbers = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let n = ('000000000' + number).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return;
  let stringNumber = '';
  if (n[1] != 0) {
    stringNumber += (lowNumbers[Number(n[1])] || hightNumbers[n[1][0]] + ' ' + lowNumbers[n[1][1]]) + 'crore ';
  };
  if (n[2] != 0) {
    stringNumber += (lowNumbers[Number(n[2])] || hightNumbers[n[2][0]] + ' ' + lowNumbers[n[2][1]]) + 'lakh '
  };
  if (n[3] != 0) {
    stringNumber += (lowNumbers[Number(n[3])] || hightNumbers[n[3][0]] + ' ' + lowNumbers[n[3][1]]) + 'thousand '
  };
  if (n[4] != 0) {
    stringNumber += (lowNumbers[Number(n[4])] || hightNumbers[n[4][0]] + ' ' + lowNumbers[n[4][1]]) + 'hundred '
  };
  if (n[5] != 0) {
    stringNumber += (lowNumbers[Number(n[5])] || hightNumbers[n[5][0]] + ' ' + lowNumbers[n[5][1]]);
  }
  return stringNumber;
}