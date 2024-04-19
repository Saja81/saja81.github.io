import React from "react";

import "../App.css";
import HeaderKomponent from "../HeaderKomponent";
import ArbeteKomponent from "../ArbeteKomponent";
import FortroendeuppdragKomponent from "../FortroendeuppdragKomponent";
import UtbildningKomponent from "../UtbildningKomponent";
import KompetenserKomponent from "../KompetenserKomponent";
import OvrigtKomponent from "../OvrigtKomponent";

function Home() {
  return (
    <div className="App">
      <header>
        <HeaderKomponent
          mail="sandrajakobsson81@gmail.com"
          mobil="0739-454840"
        />
      </header>

      <main className="App-main">
        <div className="row">
          <div className="col">
            <ArbeteKomponent />
            <UtbildningKomponent />
            <FortroendeuppdragKomponent />
          </div>
          <div className="col">
            <KompetenserKomponent />

            <OvrigtKomponent />
          </div>
        </div>
      </main>

      {/* <FetchKomponent /> */}
    </div>
  );
}

export default Home;
