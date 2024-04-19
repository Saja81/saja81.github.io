import React, { useState, useEffect } from "react";

function FortroendeuppdragKomponent() {
  const [data, setData] = useState(null);
  const [z, setZ] = useState(false);

  useEffect(() => {
    fetch("/cv.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <h2>Förtroendeuppdrag</h2>

      {data &&
        data.Fortroendeuppdrag.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <h4>
              {item.employer}{" "}
              <i style={{ fontSize: "smaller" }}>({item.date})</i>
            </h4>

            <div>
              {z === false ? (
                <input
                  onClick={() => {
                    console.log("Hej");
                    setZ(true);
                  }}
                  type="button"
                  value={"Läs mer"}
                  // Hur löser jag så endast beskrivning för ett uppdrag visas? Nu visas all när jag trycker på knappen Läs mer.
                />
              ) : (
                <p>
                  {item.description}{" "}
                  <div>
                    <input
                      onClick={() => {
                        console.log("Hej");
                        setZ(false);
                      }}
                      type="button"
                      value={"Visa mindre"}
                    />
                  </div>
                </p>
              )}
            </div>

            <p></p>
          </div>
        ))}
    </>
  );
}

export default FortroendeuppdragKomponent;
