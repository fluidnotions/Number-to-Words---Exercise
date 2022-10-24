import React, { ChangeEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HttpClient } from "./HttpClient";

const NumbersToWords: React.FunctionComponent<{handler: Function, result: string}> = (props) => {
  const [number, setNumber] = useState<number>();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumber(parseInt(event.target.value.trim()));
  };
  return (
    <div>
      <input type="number" value={number} onChange={handleChange}/>
      <button onClick={props.handler(number)}>convert</button>
      <div>
        {props.result}
      </div>
    </div>
  );
};

const App: React.FunctionComponent<any> = () => {
  const [result, setResult] = useState<string>('');
  const httpClient = new HttpClient()
  const handler = async (number: number) => {
    const result = await httpClient.getNumbersToWords(number)
    setResult(result)
  };
  return (
    <div className="App">
      <NumbersToWords handler={handler} result={result}/>
    </div>
  );
};

export default App;
