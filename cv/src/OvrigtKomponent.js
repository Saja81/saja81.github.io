import React, { useState, useEffect } from "react";

function OvrigtKomponent() {
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
      <h2>Övrigt</h2>
      <ul>{data && data.Ovrigt.map((item) => <li key={item}>{item}</li>)}</ul>
    </>
  );
}

export default OvrigtKomponent;
