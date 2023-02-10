const showButton = document.getElementById("show-image");
const disappearButton = document.getElementById("disappear-image");
const unorderedList = document.querySelector("ul");

showButton.addEventListener("click", async function getRandomDog() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    const listItem = document.createElement("li");
    const image = document.createElement("img");
    image.src = data.message;

    listItem.appendChild(image);
    unorderedList.appendChild(listItem);
  } catch (error) {
    console.log(error);
  }
});

disappearButton.addEventListener("click", function () {
  unorderedList.innerHTML = "";
});
