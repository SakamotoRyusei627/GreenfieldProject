import { useEffect, useState } from "react";
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
    "git",
    "html",
    "css",
    "javascript",
    "typescript",
    "react",
    "express",
    "knex",
    "node",
    "postman",
    "postgresql",
  ]);
  const [show, setShow] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<table[]>([]);
  console.log(value);

  useEffect(() => {
    (async () => {
      const fetchData = await fetch("http://localhost:8000/list");
      const jsonData = await fetchData.json();
      jsonData.forEach((element:any) => {
        const result = Object.values(element);
        element.All=result.join().toLowerCase();
      });
      setValue(jsonData);
    })()
  }, []);

  useEffect(() => {
    const arrMap =value.map((elem)=>{
      return elem.tag.toLowerCase()});
      const set = new Set(arrMap);
      setTagList(["All", ...Array.from(set)]);

      value.forEach((element:any) => {
        const result = Object.values(element);
        element.All=result.join().toLowerCase();
      });

      setFilterValue(value);
  }, [value]);

  const openModal = () => {
    setShow(true);
  };

  return (
    <div className="App">
      <Modal
        show={show}
        setShow={setShow}
        tagList={tagList}
        setValue={setValue}
        value={value}
      />
      <Header
        tagList={tagList}
        openModal={openModal}
        setFilterValue={setFilterValue}
        value={value}
      />
      <SearchList filterValue={filterValue} imgList={imgList}/>
    </div>
  );
}

export default App;
