import { useState } from "react";
import "./App.css";

interface InputForm {
  choice: string;
}

function App() {
  const [inputForm, setInputForm] = useState<InputForm>({ choice: "" });
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  /**
   * Set value on input change
   * @param e
   */
  const handleChangeInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
    if (value === "yes" || value === "no") {
      setShowAnswer(true);
    }
  };

  /**
   * Reset choice field
   */
  const emptyValue = () => {
    setInputForm({
      choice: "",
    });
    setShowAnswer(false);
  };

  return (
    <div className="container">
      <h1> Do you like react ?</h1>
      {!showAnswer ? (
        <form>
          <select id="select" name="choice" onChange={handleChangeInput}>
            <optgroup label="Choose">
              <option value="c" selected disabled>
                Choose
              </option>
              <option value="yes" onClick={() => setShowAnswer(true)}>
                Yes
              </option>

              <option value="no" onClick={() => setShowAnswer(true)}>
                No
              </option>
            </optgroup>
          </select>
        </form>
      ) : (
        <div className="answer">
          <p>{inputForm.choice === "yes" ? "Good choice !" : "Damn !"}</p>
          <button onClick={emptyValue}>Would you like to answer again ?</button>
        </div>
      )}
    </div>
  );
}

export default App;
