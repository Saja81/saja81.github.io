import React, { useState, useEffect } from "react";

function UtbildningKomponent() {
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
      <h2>Utbildning</h2>

      {data &&
        data.Utbildning.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <h4>
              {item.school} <i style={{ fontSize: "smaller" }}>({item.date})</i>
            </h4>
            <p>{item.description}</p>
          </div>
        ))}
    </>
  );
}

export default UtbildningKomponent;
