
function App() {
  const name = "Loïc"

  const a = 10;
  let b = 5;

  b = 12;

  const calcul = (a, b) => { return a+b; }

  return (
    <>
      <h1>Hello {name} !</h1>
      <p>Lorem ipsum: {calcul(a, b)}</p>
    </>
  );
}

export default App;
