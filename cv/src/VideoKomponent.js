import React, { useState } from "react";
// import me from "./me.png";
import benchpress from "./benchpress.mp4";

function VideoKomponent() {
  const [showElement, setShowElement] = useState(false);

  function handleClick() {
    setShowElement(true);
    // console.log("hej");
  }

  return (
    <>
      <p className="vid" onClick={handleClick}>
        Klicka här om du vill se en video från mitt senaste SM. (Videon kan
        tyvärr inte fisas i firefox.)
      </p>

      {showElement && (
        <div>
          <video width="320" height="240" controls>
            <source src={benchpress} type="video/mp4" />
          </video>
          {/* Videon visas ej i firefox, har ej löst varför */}
        </div>
      )}
    </>
  );
}

export default VideoKomponent;
