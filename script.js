/* ------------------------------ TASK 7 --------------------------------------------
Kreipiantis i zemiau pateikta resursa gauti siuos duomenis is serverio ir atvaizduoti juos htmle.
T.y. turi buti atvaizduota zinute ir nuotrauka <img>.
Taip pat tinklapyje turi buti atvaizduotas mygtukas, kuri paspaudus butu gaunami nauji duomenys
ir pakeiciami seni.
Taip pat isijungus si tinklapi is naujo turiu matyti ta pati irasa, kuri pries tai buvome gave ir tik paspaudus mygtuka "Refresh"
Turime gauti naujus duomenis.

Hint: naudojamas localstorage, saugoti informacijai;
------------------------------------------------------------------------------------ */

// const URL = "https://random-d.uk/api/random"; // nesigauna fech, meta klaida, todel pakeiciau i fox api

// const URL =
//   "https://cors-anywhere.herokuapp.com/https://random-d.uk/api/random"; sitas irgi jau nebeveikia, per daznai funkcijas ant live serverio recall'inau :/ lieku prie fox api

const URL = "https://randomfox.ca/floof/";
const button = document.getElementById("btn");
let output = document.getElementById("output");

const displayFox = (data) => {
  output.src = data.image;
};
localStorage.setItem("data", output);

const getFox = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  displayFox(data);
  console.log(data);
};

let myLocalStorage = localStorage.getItem("data");

window.onload = getFox(myLocalStorage);
button.addEventListener("click", getFox);
