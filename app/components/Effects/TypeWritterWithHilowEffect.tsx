import Typewriter from "typewriter-effect";

function TypeWritterWithHilowEffect() {
  return (
    <>
      <h1 className=" text-6xl">Do protótipo </h1>
      <div className=" flex  gap-x-2 text-center text-base md:text-2xl ">
        {" "}
        <span className=" text-6xl"> ao </span>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 50,
            wrapperClassName: `inline-block rounded-md text-6xl`,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("<div id='highlight-wrapper'><h1>site.</h1></div>")
              .callFunction(() => {
                const highlightWrapper =
                  document.getElementById("highlight-wrapper");
                highlightWrapper?.classList.add("animate-highlight");
              })
              .pauseFor(2500)
              .deleteAll()
              .typeString("<div id='highlight-wrapper'><h1>redação.</h1></div>")
              .callFunction(() => {
                const highlightWrapper =
                  document.getElementById("highlight-wrapper");
                highlightWrapper?.classList.add("animate-highlight");
              })
              .pauseFor(2500)
              .deleteAll()
              .typeString(
                "<div id='highlight-wrapper'><h1>ecommerce.</h1></div>"
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
      </div>
    </>
  );
}

export default TypeWritterWithHilowEffect;
