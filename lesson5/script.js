// javascript array directly
document.write("<h1>Names</h1>");
var names = new Array();
names[0] = "joseph";
names[1] = "sara";
names[2] = "mary";
names[3] = "hellen";
count = 0;
for (nme in names) {
  count += 1;
  document.write(count + "<h3>" + names[nme] + "</h3>");
  document.write("<br/>");
}
// javascript array constructor
document.write("<h1>Vehicles</h1>");
var cars = new Array("mercedes", "porshe", "mustang", "mazerrati");

count = 0;
for (let k = 0; k < cars.length; k++) {
  count += 1;
  document.write(count + "<h3>" + cars[k] + "</h3>");
}
// Javascript Strings
document.write("<h1>Javascript strings</h1>");
const stmt = "Javascript is Awesome";
document.write(stmt);
const literal = new String("<h3>This was created using a string literal</h3>");
document.write(literal);
