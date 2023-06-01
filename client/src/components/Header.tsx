import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import "./Header.css";
import "../Reset.css";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import AddIcon from "@mui/icons-material/Add";
import { table } from "../globals";

type Props = {
  tagList: string[];
  setTagList: Function;
  openModal: MouseEventHandler<HTMLButtonElement>;
  setFilterValue: Function;
  value: table[];
};

const Header: React.FC<Props> = ({
  tagList,
  setTagList,
  openModal,
  setFilterValue,
  value,
}) => {
  const [tagSave, setTagSave] = useState("All");
  const [searchSave, setSearchSave] = useState("");
  const [sortSave, setSortSave] = useState("昇順");

  const handleSubmit = (e: any) => {
    // https://qiita.com/P-man_Brown/items/c9d53e1c87ecce586c87
    e.preventDefault();
    console.log(e.target.search.value);

    const searchValue = e.target.search.value.toLowerCase();


    setSearchSave(searchValue);
  };
  useEffect(() => {
    const filter = () => {
      console.log({ searchSave, tagSave, sortSave });

      if (searchSave === "" && tagSave === "All" && sortSave === "昇順") {
        console.log("%c#####All#####", "color: lime");

        setFilterValue(value);
      } else {
        console.log("%c#####sort#####", "color: orange");
        console.group("フィルター・ソート結果");
        // フリーキーワード
        let filterValue = value.filter(
          (elm) => elm.All.includes(searchSave) || searchSave === ""
        );
        console.log("キーワード結果：", filterValue);
        // タグ
        filterValue = filterValue.filter(
          (elm) => elm.tag.toLowerCase().includes(tagSave) || tagSave === "All"
        );
        console.log("タグ結果：", filterValue);
        // ソート
        filterValue = filterValue.sort(function (a, b) {
          const reverse = sortSave === "昇順" ? 1 : -1;//逆転
          return a.id < b.id ? -1 * reverse : 1 * reverse; //オブジェクトの昇順ソート
        });
        console.log("ソート結果：", filterValue);

        console.groupEnd();

        setFilterValue(filterValue);
      }
    };
    filter();
  }, [searchSave, tagSave, sortSave]);

  const selectTag = (e: any) => {
    const targetTag = e.target.value;
    setTagSave(targetTag);
  };
  const selectSort = (e: any) => {
    const targetSort = e.target.value;
    setSortSave(targetSort);
  };


  return (
    <header className="header_top">
      <form className="Header-form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          className="search-input"
          name="search"
        />
        <button>
          <SearchIcon />
        </button>
      </form>
      <div className="filter">
        <label className="TuneIcon">
          <TuneIcon />
        </label>
        <select name="" id="word" onChange={selectTag}>
          {tagList.map((tag, index) => {
            return (
              <option key={index} value={tag}>
                {tag}
              </option>
            );
          })}
        </select>
        <label className="SyncAltIcon">
          <SyncAltIcon />
        </label>
        <select name="" id="date" onChange={selectSort}>
          {["昇順", "降順"].map((date, index) => {
            return (
              <option key={index} value={date}>
                {date}
              </option>
            );
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
