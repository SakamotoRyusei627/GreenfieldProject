
import { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState([]);

  const handleClick = async () => {
    console.log("hello");
    const fetchData = await fetch("http://localhost:8000/test");
    console.log(fetchData);
    const jsonData = await fetchData.json();
    console.log(jsonData);
    setValue([...value, jsonData]);
  }
  console.log(value);

  return (
    <div className="App">
      <button onClick={handleClick}>送信</button>
      <p>{value.map(e => e.firstName)}</p>
      <p>上に表示</p>
    </div>
  );
};

export default App;
