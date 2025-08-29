//your code here!

let list = document.getElementById("infi-list");
let counter = 1;

// Add 10 list items initially
for (let i = 0; i < 20; i++) {
  let li = document.createElement("li");
  li.textContent = "Item " + counter++;
  list.appendChild(li);
}

// Add items when scrolled to bottom
list.addEventListener("scroll", function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    for (let i = 0; i < 2; i++) {
      let li = document.createElement("li");
      li.textContent = "Item " + counter++;
      list.appendChild(li);
    }
  }
});
