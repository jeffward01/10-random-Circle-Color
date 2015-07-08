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
<<<<<<< HEAD
 document.getElementById('output').innerHTML = (message);
}

function build() {
=======
 log(message);
}

function generate(){
>>>>>>> origin/master
for (var i = 0; i < 10; i += 1) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + ' display:inline" ></div>';
}
}

}
  

function reload() {
<<<<<<< HEAD
  html = '';
  build();
=======
  generate();
>>>>>>> origin/master
  print(html);
}
build();
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
