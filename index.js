let text = document.querySelector("#joke");

async function fetchJokes() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  });
  let data = await res.json();
  text.innerHTML = data.joke;
}

fetchJokes();
