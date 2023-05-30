import { useState } from "react";
import "./App.css";
import "./Reset.css";
import React from "react";
import Header from "./components/Header";
import SearchList from "./components/SearchList";
import { table } from "./globals";

type Props = {
  show: boolean;
  setShow: Function;
};

const Modal: React.FC<Props> = ({ show, setShow }) => {
  if (show) {
    return (
      <div id="overlay">
        <div id="content">
          <h1>「投稿画面」</h1>
          <div>
            <label htmlFor="cheese">タイトル</label>
            <input type="text" name="cheese" id="cheese" />
          </div>
          <div>
            <label htmlFor="cheese">日付</label>
            <input type="date" name="cheese" id="cheese" />
          </div>
          <div>
            <label htmlFor="cheese">タグ</label>
            <input type="text" name="cheese" id="cheese" />
          </div>
          <div>
            <label htmlFor="cheese">キーワード</label>
            <input type="text" name="cheese" id="cheese" />
          </div>
          <div>
            <label htmlFor="cheese">URL</label>
            <input type="text" name="cheese" id="cheese" />
          </div>
          <div>
            <label htmlFor="cheese">画像</label>
            <input type="text" name="cheese" id="cheese" />
          </div>
          <button>投稿</button>
          <button onClick={() => setShow(false)}>Close</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

function App() {
  const [value, setValue] = useState<table[]>([]);
  const [tagList, setTagList] = useState<string[]>([
    "javaScript",
    "CSS",
    "HTML",
    "React",
  ]);

  const [show, setShow] = useState<boolean>(false);
  const openModal = () => {
    setShow(true);
  };

  const handleClick = async () => {
    const fetchData = await fetch("http://localhost:8000/test");
    // console.log(fetchData);
    const jsonData = await fetchData.json();
    // console.log(jsonData);
    setValue([...value, jsonData]);
  };
  console.log(value);

  return (
    <div className="App">
      <div>
        <button onClick={openModal}>投稿ウィンドウ表示</button>
        <Modal show={show} setShow={setShow} />
      </div>
      {/* <img src="./images/postgresql.svg" width="90" height="90" alt="SVG画像" /> */}
      <Header
        tagList={tagList}
        setTagList={setTagList}
        handleClick={handleClick}
      />
      <SearchList value={value} />
    </div>
  );
}

export default App;
