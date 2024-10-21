import Input from './Components/Input';

function App() {
  function checkSubmittedForm(inputValue: string) {
    console.log(inputValue);
  }
  return (
    <>
      <Input onFormSubmit={checkSubmittedForm} />
    </>
  );
}

export default App;
