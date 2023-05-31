import { useEffect, useRef, useState } from "react";
import "./App.css";
import "./Reset.css";
import Header from "./components/Header";
import Modal from "./components/Modal";
import SearchList from "./components/SearchList";
import { table } from "./globals";

function App() {
  // valueは全てのテーブル情報を格納
  const [value, setValue] = useState<table[]>([]);
  const [tagList, setTagList] = useState<string[]>([]);
  const [imgList, setImgList] = useState<string[]>([
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
  const [filterValue, setFilterValue] = useState<table[]>([]);

  useEffect(() => {
    (async () => {
      const fetchData = await fetch("http://localhost:8000/list");
      const jsonData = await fetchData.json();
      jsonData.forEach((element:any) => {
        const result = Object.values(element);
        element.All=result.join().toLowerCase();
      });
      // console.log(jsonData);
      // console.table(jsonData);
      setValue(jsonData);
    })()
  }, []);

  useEffect(() => {
    const arrMap =value.map((elem)=>{
      // console.log("Alliiiiiii",elem);
      return elem.tag.toLowerCase()});
      const set = new Set(arrMap);
      setTagList(["All", ...Array.from(set)]);

      value.forEach((element:any) => {
        const result = Object.values(element);
        element.All=result.join().toLowerCase();
      });

      setFilterValue(value);
  }, [value]);

  const [show, setShow] = useState<boolean>(false);
  const openModal = () => {
    setShow(true);
  };

  const inputRef =  useRef(null);

  return (
    <div className="App">
      <Modal
        show={show}
        setShow={setShow}
        tagList={tagList}
        inputRef={inputRef}
        setValue={setValue}
        value={value}
      />
      <Header
        tagList={tagList}
        setTagList={setTagList}
        openModal={openModal}
        setFilterValue={setFilterValue}
        value={value}
      />
      <SearchList filterValue={filterValue} imgList={imgList}/>
    </div>
  );
}

export default App;
