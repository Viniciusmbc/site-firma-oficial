export default function LogoAnimation2() {
  return (
    <div className=" m-0 p-0 flex justify-center items-center h-screen">
      <div className="planets-container">
        <div className="route">
          <div className="planet-container" id="first-planet-container">
            <div className="planet1" id="first-planet"></div>
          </div>
        </div>
        <div className="route">
          <div className="planet-container" id="second-planet-container">
            <div className="planet1" id="second-planet"></div>
          </div>
        </div>
        <div className="route">
          <div className="planet-container" id="third-planet-container">
            <div className="planet1" id="third-planet"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
