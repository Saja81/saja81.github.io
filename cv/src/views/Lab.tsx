import React from "react";
import SomeContext from "../SomeContext";
import { useState } from "react";
import { useContext } from "react";
import "../App.css";
import HeaderKomponentEtt from "../HeaderKomponentEtt";
import ChildKomponent from "./CildKomponent";

let namn = "Sandra Jakobsson";
let ålder = 42;

function ContextProvider() {
  const [x, setX] = useState("");

  return (
    <SomeContext.Provider value={{ x, setX }}>
      <About />
    </SomeContext.Provider>
  );
}

function About() {
  const { x, setX } = useContext(SomeContext);

  function handleClick() {
    setX(x + " " + namn + " " + ålder);
  }

  return (
    <div className="App">
      <header>
        <HeaderKomponentEtt
          mail="sandrajakobsson81@gmail.com"
          mobil="0739-454840"
        />
      </header>

      <main className="App-main">
        <p id="textinterpolering">
          Jag heter {namn} och jag är snart {ålder} år.
        </p>

        <p>
          Denna sida är gjord för ett react-projekt i kursen Fullstack. Syftet
          är att skapa mitt CV och mitt personliga brev i ett React-projekt.
          Nedan listas projektets krav, vissa krav har jag inte kommit på hur
          jag ska få in under CV/Mer om mig. Därför har jag löst dessa krav här
          på denna sida för att visa att jag behärskar dom. Med tiden jag lär
          mig kommer denna sida att utvecklas vidare, jag har som mål att det
          kommer vara min portfolio för kommande jobb/uppdrag/lia. Tillsvidare
          hoppas jag på tålamod för en students första lärorika månader i
          skolbänken ;-).
        </p>
        <h2>Labbens krav</h2>

        <h6>useContext</h6>
        <p>
          <b>Krav:</b> Använd useContext eller liknande för (viss)
          tillståndshantering (Värden ska både kunde sättas och hämtas)
        </p>
        <p>Oklart om jag har förstått det rätt. Testar nedan.</p>
        {/* ------------------------------------------------------------------- */}
        <SomeContext.Provider value={{ x, setX }}>
          <p onClick={handleClick} className="vid">
            Klicka här för att få veta mitt namn och ålder
          </p>
          <ChildKomponent />
        </SomeContext.Provider>
        {/* -------------------------------------------------------------- */}
        <h6 className="klart">Webbanrop, useEffect</h6>
        <p>
          <b>Krav:</b> Webbanrop görs via useEffect och information från en
          eller flera webbtjänster visas i webbapplikationen (Använd inte
          Cities-tjänsten).
        </p>
        <p>
          Klart! Gör webanrop i mina komponenter som läggs in i home.
          (Egentligen vill jag göra ett anrop för att sedan skicka in i dom
          andra komponenterna med hjälp av props - detta är något jag kommer att
          forstätta att jobba på).
        </p>

        <h6 className="klart">Textinterpolering</h6>
        <p>
          <b>Krav:</b> Använd enkla måsvingar likt hur dubbla måsvingar skulle
          ha använts i Vue.js.
        </p>
        <p>Klart! Använder i mitt p-element ovan med id textinterpolering.</p>

        <h6 className="klart">V-bind fast i react med måsvingar</h6>
        <p>
          <b>Krav:</b> Använd enkla måsvingar likt hur v-bind/: skulle ha
          använts i Vue.js (key-props (relaterade till map) räknas inte).
        </p>
        <p>Klart! Används i headerkomponenten när jag sätter bild. </p>

        <h6 className="klart">useState</h6>
        <p>
          <b>Krav:</b> Använd useState likt hur data skulle ha använts i Vue.js
        </p>
        <p>Klart! Används när jag fetchar</p>

        <h6 className="klart">Motsvarade v-if med &&</h6>
        <p>
          <b>Krav:</b> Använd && likt hur v-if skulle ha använts i Vue.js.
        </p>
        <p>
          Klart! Används i mina komponenter där jag fetchar. Om data är true så
          visas fetchad data i en lista med hjälp av map.
        </p>

        <h6 className="klart">Motsvarande v-if/v-else med (? och :)</h6>
        <p>
          <b>Krav:</b> Använd conditional/ternery-operatorn (? och :) likt hur
          v-if och v-else skulle ha använts i Vue.js.
        </p>
        <p>
          Klart! Används i komponenten om förtroendeuppdrag på läs mer-knappen.
        </p>

        <h6 className="klart">Map och key</h6>
        <p>
          <b>Krav:</b> Använd map och key likt hur v-for och key skulle ha
          använts i Vue.js
        </p>
        <p>Klart! Använder i mina fetchkomponenter</p>

        <h6 className="klart">Events</h6>
        <p>
          <b>Krav:</b> Använd events likt hur v-on/@ skulle ha använts i Vue.js{" "}
        </p>
        <p>
          Klart! Används på p-elementet som visar en video. Samt i komponenten
          om förtroendeuppdrag på läs mer-knappen.
        </p>

        <h6 className="klart">SPA med 2 websidor</h6>
        <p>
          <b>Krav:</b> En Single Page Application, bestående av minst två
          webbsidor, ska skapas med React Router eller liknande.
        </p>
        <p>
          Klart! Har skapat tre sidor. En för mitt CV, en för aboutsida och en
          med mer information om denna lab.
        </p>

        <h6 className="klart">Komponenter</h6>
        <p>
          <b>Krav:</b> Använd komponenter
        </p>
        <p>Klart!</p>

        <h6 className="klart">Props</h6>
        <p>
          <b>Krav:</b> Använd props
        </p>
        <p>
          Klart! Används i Headerkomponenten för att lägga in mail och mobil
        </p>

        <h6 className="klart">TypeScript</h6>
        <p>
          <b>Krav:</b> Minst en komponent måste vara skapad med TypeScript
        </p>
        <p>Klart! Används i About, Lab, samt Headerkomponent</p>
      </main>
    </div>
  );
}

export default ContextProvider;

// Kvar att lösa:

// Knapp visa mer i förtroendeuppdrag, visa endast beskrivning för ett uppdra, ej alla.
// Arbeta vidare med context. Få in det på ett naturligt sätt i projektet. Har jag förstått det korrekt?
// Göra endast ett webanrop och skicka in värdena i övriga komponenter.
// Lägga upp på sandrajakobsson.se samt github
