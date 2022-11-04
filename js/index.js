const container = document.querySelector(".container");
const dogs = [
  {
    name: "Chien chinois à crête",
    image: "assets/images/chien1.jpg"
  },
  {
    name: "Basenji",
    image: "assets/images/chien2.jpg"
  },
  {
    name: "Bedlington Terrier",
    image: "assets/images/chien3.jpg"
  },
  {
    name: "Bichon frisé",
    image: "assets/images/chien4.jpg"
  },
  {
    name: "Affenpinscher",
    image: "assets/images/chien5.jpg"
  },
  {
    name: "Coton de Tuléar",
    image: "assets/images/chien6.jpg"
  },
  {
    name: "Bichon havanais",
    image: "assets/images/chien7.jpg"
  },
  {
    name: "Bichon maltais",
    image: "assets/images/chien8.jpg"
  },
  {
    name: "Chien d’eau portugais",
    image: "assets/images/chien9.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  dogs.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
              </div>
              `)
  );
  container.innerHTML = output;
};