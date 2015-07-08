var html = '';
var red;
var green;
var blue;
var rgbColor;
var log = logger('output');

function randomRGB() {
  return Math.floor(Math.random() * 256 );
}

function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

function print(message) {
 log(message);
}

function generate(){
for (var i = 0; i < 10; i += 1) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + ' display:inline" ></div>';
}

}
  

function reload() {
  generate();
  print(html);
}

print(html);

function logger(x) {
var output = getById(x);
  return function (text) {
    output.innerHTML += text + '\n';
  };

}

function getById(x) {
 return document.getElementById(x);
}
////Github:
//$ cat .gitattributes
//  *.rb linguist-language=JavaScript
