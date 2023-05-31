import { useState, MouseEventHandler } from "react";
import "./App.css";
import "./Reset.css";
import React from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import SearchList from "./components/SearchList";
import { table } from "./globals";

function App() {
  const [value, setValue] = useState<table[]>([]);
  const [tagList, setTagList] = useState<string[]>([
    "css",
    "express",
    "html",
    "javascript",
    "knex",
    "nodejs",
    "postgresql",
    "postman",
    "typescript",
  ]);

  const [show, setShow] = useState<boolean>(false);
  const openModal = () => {
    setShow(true);
  };

  const handleClick = async () => {
    const fetchData = await fetch("http://localhost:8000/test");
    const jsonData = await fetchData.json();
    setValue([...value, jsonData]);
  };

  return (
    <div className="App">
      <Modal
        show={show}
        setShow={setShow}
        handleClick={handleClick}
        tagList={tagList}
      />
      <Header
        tagList={tagList}
        setTagList={setTagList}
        handleClick={handleClick}
        openModal={openModal}
      />
      <SearchList value={value} />
    </div>
  );
}

export default App;
