import React from "react";

import "../App.css";

import HeaderKomponentEtt from "../HeaderKomponentEtt";

import VideoKomponent from "../VideoKomponent";

interface AboutProps {
  namn: string;
  ålder: number;
}

function About(props: AboutProps) {
  return (
    <div className="App">
      <HeaderKomponentEtt
        mail="sandrajakobsson81@gmail.com"
        mobil="0739-454840"
      />

      <main className="App-main">
        <h2>Hej</h2>
        <div>
          <p>
            Har ni plats för en nyfiken, driven och kunskapstörstande
            Frontend-student?
          </p>

          <p>
            Vecka 34 är det dags för mig att gå på min första praktik. Jag söker
            nu en go arbetsplats som kan erbjuda mig LIA där jag kan få
            möjlighet att ta mina första steg i min nya spännande karriär.
          </p>

          <p>
            Efter snart två terminer i skolan har jag fått en inblick i flera
            olika verktyg inom Frontend. Förutom HTML, CSS, UX design och Agil
            utveckling har vi studerat Native JavaScript. Vi har även läst
            JavaScript med ramverk som Vue och React. För tillfället läser vi
            backend och kommer dom närmsta veckorna att lära oss mer om bland
            annat databaser som exempelvis SQL.
          </p>
          <p>
            Lika häftigt som det är att lära sig nytt är det samtidigt en
            utmaning på många sätt. Jag är van att vara senior i mitt tidigare
            arbetsliv.
          </p>
          <p>
            I många år har jag arbetat med driftsamordning, administration och
            reception. Jag har alltid trivts i en drivande roll där jag får
            möjlighet att skapa och utveckla. Efter många år i branschen kände
            jag dock att det var svårt att fortsätta att växa. Jag började då
            att fundera på vad jag skulle vilja göra istället.
          </p>
          <p>
            Med hjälp av kloka vänner kom jag så tillslut fram till vad jag vill
            bli när jag blir stor! Sagt och gjort, 41 år gammal sitter jag nu i
            skolbänken igen - och jag stormtrivs och är mer än övertygad om att
            jag har gjort rätt val.
          </p>
          <p>
            När jag inte pluggar hänger jag på gymmet. Jag tränar och tävlar
            sedan många år i styrkelyft. Jag får väl lov att skryta med ett
            nytaget SM-guld. Nu satsar jag på internationella tävlingar och har
            blivit uttagen till landslaget. I maj ska jag få representera
            Sverige på VM i Sydafrika.
          </p>
          <VideoKomponent />
          <p>
            För att koppla av från studier och träning brukar jag åka ut till
            min lilla stuga som ligger en liten bit utanför Göteborg. Där njuter
            jag av bad, fågelkvitter och gnägg från grannhästarna.
          </p>
          <p>
            Jag hoppas att jag med detta brev har gett er en bild av mig som
            person. Nu håller jag tummarna för att jag får möjlighet att få
            komma till er på intervju för LIA.
          </p>
          <p>Väl mött!</p>
        </div>
        <div>
          <p id="sign">Sandra Jakobsson</p>
        </div>
      </main>
    </div>
  );
}

export default About;
