import React, { useReducer } from "react";

const initialCars = [
  {
    id: 1,
    name: "Avanza",
    isAvailable: true,
  },
  {
    id: 2,
    name: "Inonva",
    isAvailable: true,
  },
];

const reducerCars = (state, action) => {
  switch (action.type) {
    case "SELL":
      return state.map((car) => {
        if (car.id === action.id) {
          return { ...car, isAvailable: !car.isAvailable };
        } else {
          return car;
        }
      });
    default:
      return state;
  }
};

function App() {
  const [cars, dispatch] = useReducer(reducerCars, initialCars);

  const handleComplete = (car) => {
    dispatch({ type: "SELL", id: car.id });
  };

  return (
    <>
    {cars.map((car) => (
      <div key={car.id}>
        <label>
          <input
            type="checkbox"
            checked={car.isAvailable}
            onChange={() => handleComplete(car)}
          />
          {car.name}
        </label>
        <span>{car.isAvailable ? '(TERSEDIA) ': ' (TERJUAL)'}</span>
      </div>
    ))}
  </>
  );
}

export default App;

