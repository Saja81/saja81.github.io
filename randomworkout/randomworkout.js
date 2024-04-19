fetch("index.json")
  // Hämtar en egen JSON-fil.
  .then((res) => res.json())
  .then((data) => {
    const menu = document.getElementById("menu");
    const tid = document.getElementById("time");
    const buttonwo = document.getElementById("buttonwo");

    // --------------------------------------------------

    menu.addEventListener("input", showSelectedWorkout);
    menu.addEventListener("input", showListExercises);
    buttonwo.addEventListener("click", randomExercises);

    showSelectedWorkout();
    showListExercises();

    // --------------------------------------------------

    function showSelectedWorkout() {
      const workoutOfChoise = document.getElementById("workoutOfChoise");
      workoutOfChoise.innerHTML = document.querySelector("select").value;
    }

    // --------------------------------------------------

    function showListExercises() {
      const listExercises = document.getElementById("listExercises");
      if (document.querySelector("select").value === "Välj workout") {
        listExercises.innerHTML = "";
        tid.innerHTML =
          "Välj önskad workout i rullistan ovan för att få förslag på övningar.";
      }

      if (document.querySelector("select").value === "Kettlebell") {
        const newArrayKb = [];
        // I mina forloopar sätter jag i till 3 eller 5 beroende på hur många övningar jag vill ha i workouten.
        for (let i = 0; i < 3; i++) {
          const randomIndexKettlebell = Math.floor(
            Math.random() * data.utrustning[0].Kettlebell.namn.length
          );
          newArrayKb.push(
            data.utrustning[0].Kettlebell.namn[randomIndexKettlebell]
          );
        }
        listExercises.innerHTML = newArrayKb;
        tid.innerHTML = data.tid[0].Tabata;
        // console.log("Vald wo är kb, tabata");
      }

      if (document.querySelector("select").value === "Trx") {
        const newArrayTrx = [];
        for (let i = 0; i < 5; i++) {
          const randomIndexTrx = Math.floor(
            Math.random() * data.utrustning[1].Trx.namn.length
          );
          newArrayTrx.push(data.utrustning[1].Trx.namn[randomIndexTrx]);
        }
        listExercises.innerHTML = newArrayTrx;
        tid.innerHTML = data.tid[1].TioRepsFyraSet;
        // console.log("Vald wo är Trx, tio*fyra");
      }

      if (document.querySelector("select").value === "Kroppsvikt") {
        const newArrayBw = [];
        for (let i = 0; i < 5; i++) {
          const randomIndexKroppsvikt = Math.floor(
            Math.random() * data.utrustning[2].Kroppsvikt.namn.length
          );
          newArrayBw.push(
            data.utrustning[2].Kroppsvikt.namn[randomIndexKroppsvikt]
          );
        }
        listExercises.innerHTML = newArrayBw;
        tid.innerHTML = data.tid[1].TioRepsFyraSet;
        // console.log("Vald wo är kroppsvikt, tion*fyra");
      }

      if (document.querySelector("select").value === "Hiit") {
        const newArrayHiit = [];
        for (let i = 0; i < 5; i++) {
          const randomIndexHiit = Math.floor(
            Math.random() * data.utrustning[3].Hiit.namn.length
          );
          newArrayHiit.push(data.utrustning[3].Hiit.namn[randomIndexHiit]);
        }
        listExercises.innerHTML = newArrayHiit;
        tid.innerHTML = data.tid[0].Tabata;
        // console.log("Vald wo är Hiit, tabata");
      }
    }

    // ------------------------------------------------------

    function randomExercises() {
      if (document.querySelector("select").value === "Kettlebell") {
        const newArrayKb = [];
        for (let i = 0; i < 3; i++) {
          const randomIndexKettlebell = Math.floor(
            Math.random() * data.utrustning[0].Kettlebell.namn.length
          );
          newArrayKb.push(
            data.utrustning[0].Kettlebell.namn[randomIndexKettlebell]
          );
        }
        listExercises.innerHTML = newArrayKb;
        tid.innerHTML = data.tid[0].Tabata;
        // console.log("Vald wo är kb, tabata");
      }

      if (document.querySelector("select").value === "Trx") {
        const newArrayTrx = [];
        for (let i = 0; i < 5; i++) {
          const randomIndexTrx = Math.floor(
            Math.random() * data.utrustning[1].Trx.namn.length
          );
          newArrayTrx.push(data.utrustning[1].Trx.namn[randomIndexTrx]);
        }
        listExercises.innerHTML = newArrayTrx;
        tid.innerHTML = data.tid[1].TioRepsFyraSet;
        // console.log("Vald wo är Trx, tio*fyra");
      }

      if (document.querySelector("select").value === "Kroppsvikt") {
        const newArrayBw = [];
        for (let i = 0; i < 5; i++) {
          const randomIndexKroppsvikt = Math.floor(
            Math.random() * data.utrustning[2].Kroppsvikt.namn.length
          );
          newArrayBw.push(
            data.utrustning[2].Kroppsvikt.namn[randomIndexKroppsvikt]
          );
        }
        listExercises.innerHTML = newArrayBw;
        tid.innerHTML = data.tid[1].TioRepsFyraSet;
        // console.log("Vald wo är kroppsvikt, tion*fyra");
      }

      if (document.querySelector("select").value === "Hiit") {
        const newArrayHiit = [];
        for (let i = 0; i < 5; i++) {
          let randomIndexHiit = Math.floor(
            Math.random() * data.utrustning[3].Hiit.namn.length
          );
          newArrayHiit.push(data.utrustning[3].Hiit.namn[randomIndexHiit]);
        }
        listExercises.innerHTML = newArrayHiit;
        tid.innerHTML = data.tid[0].Tabata;
        // console.log("Vald wo är Hiit, tabata");
      }
    }
  });
