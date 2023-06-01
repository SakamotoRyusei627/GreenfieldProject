
import React, { MouseEventHandler } from "react";
import "./Header.css";
import "../Reset.css";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from '@mui/icons-material/Tune';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import AddIcon from '@mui/icons-material/Add';
import { table } from "../globals";

type Props = {
  tagList: string[];
  openModal: MouseEventHandler<HTMLButtonElement>;
  setFilterValue: Function;
  value: table[];
};

const Header: React.FC<Props> = ({ tagList, openModal, setFilterValue, value }) => {

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.search.value);
  
    const searchValue = e.target.search.value.toLowerCase();
    console.log(searchValue);

    const filterValue = value.filter(elm => elm.All.includes(searchValue));
    if (filterValue.length===0) {
      setFilterValue(value);
    } else {
      setFilterValue(filterValue);
    }
  }

  const selectTag = (e: any) => {
    const target=e.target.value
    const filterValue = value.filter(elm => elm.All.includes(target));
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
        <label className="TuneIcon">
          <TuneIcon />
        </label>
        <select name="" id="word" onChange={selectTag}>
          {tagList.map((tag, index) => {
            return <option key={index} value={tag}>{tag}</option>;
          })}
        </select>
        <label className="SyncAltIcon">
          <SyncAltIcon />
        </label>
        <select name="" id="date">
          {["昇順", "降順"].map((date, index) => {
            return <option key={index} value={date}>{date}</option>;
          })}
        </select>
        <button className="new-post" onClick={openModal}>
          <div>
            <AddIcon />
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
