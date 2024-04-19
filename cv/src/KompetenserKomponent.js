import React, { useState, useEffect } from "react";

function KompetenserKomponent() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/cv.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <h2>Kompetenser</h2>
      <h3>Programmering</h3>
      <ul>
        {data &&
          data.Kompetenser.Programmering.map((item) => (
            <li key={item}>{item}</li>
          ))}
      </ul>
      <h3>Administrationssystem</h3>
      <ul>
        {data &&
          data.Kompetenser.Administrationssystem.map((item) => (
            <li key={item}>{item}</li>
          ))}
      </ul>
      <h3>Coaching & Ledarskap</h3>
      <ul>
        {data &&
          data.Kompetenser.Coaching.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <h3>Ekonomi</h3>
      <ul>
        {data &&
          data.Kompetenser.Ekonomi.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </>
  );
}

export default KompetenserKomponent;
