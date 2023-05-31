
import React, { MouseEventHandler } from "react";
import "./Header.css";
import "../Reset.css";
import SearchIcon from "@mui/icons-material/Search";
import { table } from "../globals";

type Props = {
  tagList: string[];
  // setTag: (tagList: string[]) => void;
  setTagList: Function;
  openModal: MouseEventHandler<HTMLButtonElement>;
  setFilterValue: Function;
  value: table[];
};

const Header: React.FC<Props> = ({ tagList, setTagList, openModal, setFilterValue, value }) => {

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.search.value);
  
    const searchValue = e.target.search.value.toLowerCase();
    console.log(searchValue);

    const filterValue = value.filter(elm => elm.All.includes(searchValue));
    // console.log(filterValue);
    if (filterValue.length===0) {
      setFilterValue(value);
    } else {
      setFilterValue(filterValue);
    }
  }

  const selectTag = (e: any) => {
    const target=e.target.value
    // console.log(target);
    const filterValue = value.filter(elm => elm.All.includes(target));
    // console.log(filterValue);
    if (target==="All") {
      setFilterValue(value);
    } else {
      setFilterValue(filterValue);
    }
  };

  return (
    <header className="header_top">
      <form className="Header-form" onSubmit={handleSubmit}>
        <input type="search" placeholder="Search" className="search-input" name="search" />
        <button><SearchIcon /></button>
      </form>
      <div className="filter">
        <select name="" id="word" onChange={selectTag}>
          {tagList.map((tag, index) => {
            return <option key={index} value={tag}>{tag}</option>;
          })}
        </select>
        <select name="" id="date">
          {["昇順", "降順"].map((date, index) => {
            return <option key={index} value={date}>{date}</option>;
          })}
        </select>
        <button onClick={openModal}>投稿ウィンドウ表示</button>
      </div>
    </header>
  );
};

export default Header;
