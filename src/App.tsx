import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { HttpClient } from "./HttpClient";

const NumbersToWords: React.FunctionComponent<{handler: (num?: string) => Promise<void>, result: string}> = (props) => {
  const [number, setNumber] = useState<string>('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(`handleChange -> event`, event)
    setNumber(event.target.value);
  };
  return (
    <div className="form">
      <input type="number" value={number} onChange={handleChange}/>
      <button onClick={() => props.handler(number)}>convert</button>
      <div className="result">
        {props.result}
      </div>
    </div>
  );
};

const App: React.FunctionComponent<any> = () => {
  const [result, setResult] = useState<string>('');
  const httpClient = new HttpClient()
  const handler = async (number?: string) => {
    console.log(`handler -> number`, number)
    if (number) {
      const result = await httpClient.getNumbersToWords(number)
      console.log(`handler -> result`, result)
      setResult(result)
    }
  };
  return (
    <div className="App">
      <NumbersToWords  handler={handler} result={result}/>
    </div>
  );
};

export default App;
