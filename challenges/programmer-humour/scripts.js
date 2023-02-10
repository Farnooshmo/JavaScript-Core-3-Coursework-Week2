async function fetchImage() {
  try {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");
    const data = await response.json();

    let image = document.createElement("img");
    let imageSection = document.querySelector("#image-section");
    imageSection.appendChild(image);
    image.src = data.img;

    console.log(data);

  } catch (error) {
    console.log("error", error);
  }
}

fetchImage();
