// formula for finding area of triangle:
// area = (base * height) / 2
// const base = prompt("Enter base of Triangle: ");
// const height = prompt("Enter height of Triangle: ");

function area() {
  const base = document.getElementById("base").value;
  const height = document.getElementById("height").value;
  const area = (base * height) / 2;
  document.getElementById("area").innerHTML = `area of triangle is : ${area}`;
}
