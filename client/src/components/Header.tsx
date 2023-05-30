
import React, { MouseEventHandler } from "react";
import "./Header.css";
import "../Reset.css";

type Props = {
  tagList: string[];
  // setTag: (tagList: string[]) => void;
  setTagList: Function;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

const Header: React.FC<Props> = ({ tagList, setTagList, handleClick }) => {
  return (
    <header className="header_top">
      <div>
        <input type="text" />
        <button>検索</button>
      </div>
      <div>
        <select name="" id="">
          {tagList.map((tag, index) => {
            return <option key={index} value="">{tag}</option>;
          })}
        </select>
        <select name="" id="">
          {["昇順", "降順"].map((date, index) => {
            return <option key={index} value="">{date}</option>;
          })}
        </select>
        <button onClick={handleClick}>投稿</button>
      </div>
    </header>
  );
};

export default Header;
