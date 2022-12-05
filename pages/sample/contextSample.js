import React, { useState, createContext, useContext } from "react";


const CityContext = createContext();

function App() {
  const [city, setCity] = useState("Jakarta");

  return (
    <CityContext.Provider value={city}>
      <h1>{`Ini Kota ${city}!`}</h1>
      <Component2 city={city} />
    </CityContext.Provider>
  );
}
function Component2({ city  }) {
  return (
    <>
      <h1>Component 2: { city }</h1>
      <Component3 />
    </>
  );
} 

function Component3() {
  const city = useContext(CityContext);

  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${city} again!`}</h2>
    </>
  );
}

export default App;
