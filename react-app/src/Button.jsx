import { useState } from "react";

export default function MyButton() {
  const [count, setCount] = useState(0);
  const [jumlah, setJumlah] = useState(7);
  const angka = 1;

  function handleClick() {
    setCount(count + 1);
    alert("You clicked me!");
    setJumlah(jumlah + 1);
  }

  return (
    <button onClick={handleClick}>
      Click me {count}
      Jumlah {jumlah}
    </button>
  );
}
