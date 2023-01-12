const heading = document.querySelector(".header");
const paragraph = document.querySelector(".para");
const btn = document.querySelector(".svg-2");

let headingNo;
let advice;
function randomQuote() {
  const URL = "https://api.adviceslip.com/advice";

  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("API issues");
      }

      return response.json();
    })
    .then((data) => {
      //   console.log(data.id);
      //   console.log(data.advice);
      console.log(data.slip.id);
      console.log(data.slip.advice);

      headingNo = data.slip.id;
      advice = data.slip.advice;

      heading.textContent = `Advice #${headingNo}`;
      paragraph.textContent = `"${advice}"`;
    })
    .catch((error) => {
      console.error(error);
    });
}

btn.addEventListener("click", () => {
  randomQuote();
});
