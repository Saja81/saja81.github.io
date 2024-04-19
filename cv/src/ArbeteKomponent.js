import React, { useState, useEffect } from "react";

function ArbeteKomponent() {
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
      <h2>Arbetslivserfarenhet</h2>

      {data &&
        data.Arbetslivserfarenhet.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <h4>
              {item.employer}{" "}
              <i style={{ fontSize: "smaller" }}>({item.date})</i>
            </h4>
            <p>{item.description}</p>
          </div>
        ))}
    </>
  );
}

export default ArbeteKomponent;
