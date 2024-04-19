fetch("https://wger.de/api/v2/exerciseinfo/?language=2&limit=300", {
  // Det ska gå att sortera på språk genom att välja "/?language=2" ovan. Men av någon anledning fungerar det inte. Detta hanteras istället på rad 20.
  headers: {
    Authorization: "Token fe0ed8c56e8f168c9de3049affeeeead9666afd8",
  },
})
  .then((res) => res.json())
  .then((data) => {
    const button = document.getElementById("button");
    const nameOfExercise = document.getElementById("nameOfExercise");
    const primaryMuscles = document.getElementById("primaryMuscles");
    const description = document.getElementById("description");
    button.addEventListener("click", f);

    // ------------------------------------------------------------

    function f() {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      // Först vill jag sortera bort alla övningar som inte är på engelska. Om dom är på engelska (id=2) tar jag övningens namn och lägger in i constanten nameOfIndex.
      if (data.results[randomIndex].language.id === 2) {
        nameOfExercise.textContent = data.results[randomIndex].name;

        if (
          // Därefter vill jag ta reda på om övningen saknar beskrivning. Om så är fallet lägger jag in texten "Beskrivning saknas" i constanten description. Om besrkivning finns lägger jag in denna i constanten.
          data.results[randomIndex].description === undefined ||
          data.results[randomIndex].description === null ||
          data.results[randomIndex].description === ""
        ) {
          description.innerHTML = "Beskrivning saknas";
          // console.log("Beskrivning saknas");
        } else {
          description.innerHTML = data.results[randomIndex].description;
        }
        if (
          // Här kollar jag om muskler finns.
          data.results[randomIndex].muscles === null ||
          data.results[randomIndex].muscles.length === 0
        ) {
          primaryMuscles.innerHTML = "Infomation om muskler saknas";
          // console.log("Muskler saknas");
        } else {
          primaryMuscles.innerHTML = data.results[randomIndex].muscles[0].name;
        }
        if (
          // Här kollar jag om det finns en bild. Om inte lägger jag in en egen vald bild.
          data.results[randomIndex].images === null ||
          data.results[randomIndex].images.length === 0
        ) {
          const img = document.querySelector("img");
          img.setAttribute("src", "barbell.jpg");
          // console.log("Bild saknas");
        } else {
          const img = document.querySelector("img");
          img.setAttribute("src", data.results[randomIndex].images[0].image);
          // console.log("Finns bild");
        }
      } else {
        // Om datan inte är på engelska vilket jag testar på rad 20 kör jag funktionen igen här.
        f();
      }
    }

    console.log(data.results);
    // Jag konsolloggar datan för att lättare se vad jag arbetar med samt för att visa vid presentation.
  });
