import React, { useState, useEffect } from "react";


function Hook() {
  // const [title, setTitle] = useState("Cooderu");

  // return (
  //   <div>
  //     <p>{title}</p>
  //     <input type="text"
  //       onChange={(event) => { setTitle(event.target.value) }}
  //       value={title}
  //     /><br />
  //     <button onClick={() => { setTitle("Cooderu") }}>Reset</button>
  //   </div>
  // );
  // const [laptop, setLaptop] = useState({
  //   name: "Lenovo Yoga",
  //   height: "3 kg",
  //   dimention: "14 inc",
  //   stock: 100,
  // });

  // const updateStock = () => {
  //   setLaptop((previousState) => {
  //     return { ...previousState, stock: laptop.stock - 1, height: `${laptop.stock-1} Kg` };
  //   });
  // };

  // return (
  //   <>
  //     <h1>Dijual: {laptop.name}</h1>
  //     <p>
  //       Height: {laptop.height} Dimention: {laptop.dimention}
  //     </p>
  //     <p>Stock: {laptop.stock}</p>
  //     <button type="button" onClick={updateStock}>
  //       BELI
  //     </button>
  //   </>
  // );

  // const [count, setCount] = useState(0);
  // const [status, setStatus] = useState("Active");

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //     if (count >= 30) {
  //       setStatus('Expired')
  //     }

  //   }, 1000);
  // });

  // return <h1>I've rendered {count} times! {status}</h1>;

  const [count, setCount] = useState(1);
  const [status, setStatus] = useState('GANJIL');

  useEffect(() => {
    updateNumber();
  }, [count]);

  const updateNumber = () => {
    if(count % 2 === 1){
      setStatus('GANJIL')
    } else {
      setStatus('GENAP')
    }
  }
  
  return (<>
  <h1>Total count: {count} ({status})</h1>
  <button onClick={()=>{setCount(count+1)}}>Klik</button>
  </>);

}

export default Hook;
