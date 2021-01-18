const text = document.querySelector("#text");
const btn = document.querySelector("#btn");
btn.addEventListener("click", getJokes);
text.innerHTML = " ";

async function getJokes() {
  const url = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      accept: "application/json"
    }
  });
  const urlJSON = await url.json();
  console.log("url'nin kendisi", url);
  console.log("json: ", urlJSON);
  console.log("json joke: ", urlJSON.joke);
  text.innerText = urlJSON.joke
}
