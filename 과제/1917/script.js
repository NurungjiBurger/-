const badWords = ["바보", "멍청", "메롱"];
const input = document.querySelector("#input");
const output = document.querySelector("#output");

console.dir(input);
console.dir(output);

input.addEventListener("input", (e) => {
  let value = e.target.value;
  badWords.forEach((word) => {
    if (value.includes(word)) {
      const stars = "*".repeat(word.length);
      value = value.split(word).join(stars);
    }
  });
  output.textContent = value;
});