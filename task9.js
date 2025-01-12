var popoverlay = document.querySelector(".pop-overlay");
var popmess = document.querySelector(".pop-mess");
var btn = document.getElementById("pop");

btn.addEventListener("click", function () {
  popoverlay.style.display = "block";
  popmess.style.display = "block";
});

var cancel = document.getElementById("cancelbutton");

cancel.addEventListener("click", function (event) {
  event.preventDefault();
  popoverlay.style.display = "none";
  popmess.style.display = "none";
});

var container = document.querySelector(".container");
var books = document.getElementById("addbook");
var bookname = document.getElementById("book-name");
var bookpara = document.getElementById("book-para");
var bookdescription = document.getElementById("book-description");

books.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "books");
  div.innerHTML = `<h3>${bookname.value}</h3><h6>${bookpara.value}</h6><p>${bookdescription.value}</p><button onclick="deletebook(event)">delete</button>`;
  container.append(div);
  popoverlay.style.display = "none";
  popmess.style.display = "none";
});

function deletebook(event) {
  event.target.parentElement.remove();
}
