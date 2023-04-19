import { useState } from "react";
import Typewriter from "typewriter-effect";

function TypeWritterWithHilowEffect() {
  const [highlighted, setHighlighted] = useState(false);

  function handleTypewriterComplete() {
    setHighlighted(true);
    return console.log("verdadeiro");
  }

  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
        delay: 50,
        wrapperClassName: `inline-block rounded-md text-4xl`,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("<div id='highlight-wrapper'><span>site.</span></div>")
          .callFunction(() => {
            const highlightWrapper =
              document.getElementById("highlight-wrapper");
            highlightWrapper?.classList.add("animate-highlight");
          })
          .pauseFor(2500)
          .deleteAll()
          .typeString("<div id='highlight-wrapper'><span>redação.</span></div>")
          .callFunction(() => {
            const highlightWrapper =
              document.getElementById("highlight-wrapper");
            highlightWrapper?.classList.add("animate-highlight");
          })
          .pauseFor(2500)
          .deleteAll()
          .typeString(
            "<div id='highlight-wrapper'><span>ecommerce.</span></div>"
          )
          .callFunction(() => {
            const highlightWrapper =
              document.getElementById("highlight-wrapper");
            highlightWrapper?.classList.add("animate-highlight");
          })
          .pauseFor(2500)
          .deleteAll()
          .start();
      }}
    />
  );
}

export default TypeWritterWithHilowEffect;
