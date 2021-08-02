import React, { useState, useEffect } from "react";

function MouseMove() {
  const [mouseX, setMouseX] = useState("0");
  const [mouseY, setMouseY] = useState("0");

  useEffect(() => {
    //has elements like component did mount
    document.addEventListener("mousemove", handleMouseMove);

    //when the component is no longer a part of the Dom then the following is called.
    return () => {
      console.log("component did unmount");
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function handleMouseMove(e) {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  }

  return (
    <div>
      <h1>Use Effect Intro!</h1>
      <p>Mouse X Position: {mouseX}</p>
      <p>Mouse Y Position: {mouseY}</p>
    </div>
  );
}

export default MouseMove;
