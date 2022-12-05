import React, { useRef } from "react";

function App() {
  const inputElementName = useRef();
  const inputElementHoby = useRef();

  const focusInput = () => {
    // inputElement.current.focus();
    inputElementName.current.value = "";
    inputElementHoby.current.value = "";
    // console.log(inputElement.current);
  };

  return (
    <>
    <div>Nama</div>
      <input type="text" ref={inputElementName} id='nama'/>
    <div>Hobi</div>
      <input type="text" ref={inputElementHoby} id='hoby'/>
      <br />
      <button onClick={focusInput}>Submit</button>
    </>
  );
}

export default App;
