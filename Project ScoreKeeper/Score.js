let score = 0;
let wicket = 0;
let hit;
let runsAndWicket = [];

// using ref to access the input field
let inputRef = React.createRef();

const add = (num) => {
  hit = num;
  // this will render the App componenet when btn is clicked
  DOMElement.render(<App />);
};

const wicketfall = () => {
  hit = "w";
};

let hide = true;
const setShow = () => {
  hide = !hide;
  DOMElement.render(<App />);
};

const RunButtons = () => (
  <>
    <button onClick={() => add(1)}>1</button>
    <button onClick={() => add(2)}>2</button>
    <button onClick={() => add(3)}>3</button>
    <button onClick={() => add(4)}>4</button>
    <button onClick={() => wicketfall()}>wicket</button>
  </>
);

const handleSubmit = (e) => {
  e.preventDefault();
  if (hit == "w") {
    wicket++;
  } else {
    score += hit;
  }

  runsAndWicket.unshift(
    <span>
      {hit}
      {","}
      {inputRef.current.value}
    </span>
  );
  hit = "";
  inputRef = "";
  console.log(runsAndWicket);
  console.log(Object.keys(runsAndWicket[0]));
  DOMElement.render(<App />);
};

const Form = () => {
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input placeholder="your score" value={hit} />
        <input placeholder="akash chopra wali lines boliye" ref={inputRef} />
        <button>Submit</button>
      </form>
    </>
  );
};

const App = () => {
  return (
    <>
      {/* toggle button to show or hide button */}
      <button onClick={setShow}>
        {hide ? <p>Show Score</p> : <p>Hide Score</p>}
      </button>
      {hide ? (
        <>
          <div>Score : {score}</div>
          <div>wicket : {wicket}</div>
        </>
      ) : (
        <></>
      )}
      {/* we cant use add() because react automatically calls the functions so we have to use onclick ={add}  */}
      {/* if we want to pass argument then call inside some another function like below ()=>add(1) */}
      <RunButtons />
      <Form />
      {runsAndWicket.map((item, index) => (
        <p key={index}> {item}</p>
      ))}
    </>
  );
};

const DOMElement = ReactDOM.createRoot(document.getElementById("root"));
DOMElement.render(<App />);
