
import React, { MouseEventHandler } from "react";
import "./Header.css";
import "../Reset.css";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  tagList: string[];
  // setTag: (tagList: string[]) => void;
  setTagList: Function;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  openModal: MouseEventHandler<HTMLButtonElement>;
};

const Header: React.FC<Props> = ({ tagList, setTagList, handleClick, openModal }) => {
  return (
    <header className="header_top">
      <form>
        <input type="search" placeholder="Search" className="search-input" />
        <button><SearchIcon /></button>
      </form>
      <div className="filter">
        <select name="" id="word">
          {tagList.map((tag, index) => {
            return <option key={index} value="">{tag}</option>;
          })}
        </select>
        <select name="" id="date">
          {["昇順", "降順"].map((date, index) => {
            return <option key={index} value="">{date}</option>;
          })}
        </select>
        <button onClick={openModal}>投稿ウィンドウ表示</button>
      </div>
    </header>
  );
};

export default Header;
