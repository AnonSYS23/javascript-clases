function appendValue(value) {
  document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function deleteLast() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = result.slice(0, -1);
}

function calculate() {
  var result = document.getElementById('result').value;
  var answer = eval(result);
  document.getElementById('result').value = answer;
}
