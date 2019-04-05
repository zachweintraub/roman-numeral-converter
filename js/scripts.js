function romanNumeralize(num){
  var romanNumerals = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  inputBreakdown = [];
  output = '';

  inputBreakdown.push(parseInt(num/1000));
  inputBreakdown.push(parseInt((num%1000)/500));
  inputBreakdown.push(parseInt((num%500)/100));
  inputBreakdown.push(parseInt((num%100)/50));
  inputBreakdown.push(parseInt((num%50)/10));
  inputBreakdown.push(parseInt((num%10)/5));
  inputBreakdown.push(parseInt(num%5));

  console.log(inputBreakdown);

  for(var i = 0; i<inputBreakdown.length; i++) {
    if(inputBreakdown[i] == 1 & inputBreakdown[i+1] == 4) {
    output = output.concat(romanNumerals[i+1] + romanNumerals[i-1]);
    inputBreakdown[i+1] = 0;
    } else if(inputBreakdown[i] < 4) {
      for(var x = 0; x<inputBreakdown[i]; x++) {
        output = output.concat(romanNumerals[i]);
    }}else {
      output = output.concat(romanNumerals[i] + romanNumerals[i - 1]);
    }
  }
  return output;
}

function deRomanize(str) {
  var controlArr = [1000, 500, 100, 50, 10, 5, 1];
  var romanArr = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  var output = 0;
  var inputArr = str.split('');
  for (var i = 0; i < inputArr.length; i++) {
    if(romanArr.indexOf(inputArr[i]) <= romanArr.indexOf(inputArr[i + 1]) || i === inputArr.length-1) {
      output += controlArr[romanArr.indexOf(inputArr[i])];
    } else {
      output += (controlArr[romanArr.indexOf(inputArr[i + 1])] - controlArr[romanArr.indexOf(inputArr[i])]);
      i++;
    }
  }
  return output;
}

$(function(){
  $('#myInput').keyup(function(){
    $('#myAns p').text(romanNumeralize($('#myInput').val()));
  });
});
