const heading = document.getElementById("main-heading");

heading.textContent = "Hello Demis";

heading.addEventListener("click", () => {
  heading.style.backgroundColor = "dodgerblue";
  heading.style.borderRadius = "2px";
  heading.style.marginBottom = "10px";
  heading.style.padding = "10px";
  heading.textContent = "Hi, there!";
});

const listItem = document.querySelectorAll(".list-item");

const list = document.querySelector(".list");

list.addEventListener("click", () =>
  listItem.forEach(() => {
    for (let item = 0; item < listItem.length; item++) {
      const element = listItem[item];
      element.style.backgroundColor = "red";
    }
  })
);
