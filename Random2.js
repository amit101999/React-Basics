const Form = () => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.type);
          marks.push({
            name: e.target.name.value,
            marks: e.target.marks.value,
          });
          rootElement.render(<App />);
        }}
      >
        <input type="text" placeholder="Name" name="name" />
        <input type="number" placeholder="Mrks" name="marks" />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

let marks = [];

const Result = () => {
  return (
    <>
      <table border="1px">
        <thead>
          <tr>
            <th>Student</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((item, i) => (
            <tr>
              <th>{item.name}</th>
              <th>{item.marks}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const App = () => (
  <>
    <Form />
    <Result />
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
