const URL = "https://dog.ceo/api/breeds/image/random";

const img = document.querySelector("img");
const btn = document.querySelector("button");

async function getImage() {
  try {
    const response = await axios.get(URL);
    console.log(response.data);
    img.src = response.data.message;
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener("click", () => {
  getImage();
});