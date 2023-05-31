import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import "./Header.css";
import "../Reset.css";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from '@mui/icons-material/Tune';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import AddIcon from '@mui/icons-material/Add';
import { table } from "../globals";

type Props = {
  tagList: string[];
  // setTag: (tagList: string[]) => void;
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
  // let searchSave = "";
  const [tagSave, setTagSave] = useState("All");
  const [searchSave, setSearchSave] = useState("");
  const [sortSave, setSortSave] = useState("昇順");
  // const tagRef = useRef(null);
  // const searchRef = useRef(null);
  const handleSubmit = (e: any) => {
    // https://qiita.com/P-man_Brown/items/c9d53e1c87ecce586c87
    e.preventDefault();
    console.log(e.target.search.value);

    const searchValue = e.target.search.value.toLowerCase();
    // console.log("####################");
    // console.log(searchValue);

    setSearchSave(searchValue);

    // // ########################変更
    // const filterValue = value.filter((elm) => elm.All.includes(searchValue));
    // console.log(filterValue);
    // if (e.target.search.value !== "") {
    //   if (filterValue.length === 0) {
    //     setFilterValue([]);
    //   } else {
    //     setFilterValue(filterValue);
    //   }
    // } else {
    //   setFilterValue(value);
    // }
    // // ########################変更
  };
  useEffect(() => {
    const filter = () => {
      // console.log(filterValue);
      console.log({ searchSave });
      console.log({ tagSave });
      console.log({ sortSave });
      // console.log(tagRef.current.value);

      if (searchSave === "" && tagSave === "All" && sortSave === "昇順") {
        console.log("All");

        setFilterValue(value);
      } else {
        console.log("else");
        // フリーキーワード
        let filterValue = value.filter(
          (elm) => elm.All.includes(searchSave) || searchSave === ""
        );
        console.log("キーワード", filterValue);
        // タグ
        filterValue = filterValue.filter(
          (elm) => elm.tag.toLowerCase().includes(tagSave) || tagSave === "All"
        );
        console.log("タグ", filterValue);
        // ソート
        filterValue = filterValue.sort(function (a, b) {
          // console.log("###########");

          // console.log(b);
          const reverse = sortSave === "昇順" ? 1 : -1;
          return a.id < b.id ? -1 * reverse : 1 * reverse; //オブジェクトの昇順ソート
        });
        console.log("ソート後", filterValue);

        // if (filterValue.length === 0) {
        //   setFilterValue([]);
        //   console.log("0");
        // } else {
          setFilterValue(filterValue);
          // console.log("setFilterValue(filterValue);");
        // }
      }
    };
    filter();
  }, [searchSave, tagSave, sortSave]);

  const selectTag = (e: any) => {
    const targetTag = e.target.value;
    // tagSave = targetTag;
    setTagSave(targetTag);

    // console.log(target);
    // const filterValue = value.filter((elm) =>
    //   elm.tag.toLowerCase().includes(targetTag)
    // );
    // console.log(filterValue);
    // if (targetTag === "All") {
    //   setFilterValue(value);
    // } else {
    //   setFilterValue(filterValue);
    // }
  };
  const selectSort = (e: any) => {
    const targetSort = e.target.value;
    // tagSave = targetTag;
    setSortSave(targetSort);

    // console.log(targetSort);
    // const filterValue = value.filter((elm) =>
    //   elm.tag.toLowerCase().includes(targetTag)
    // );
    // console.log(filterValue);
    // if (targetTag === "All") {
    //   setFilterValue(value);
    // } else {
    //   setFilterValue(filterValue);
    // }
  };

  return (
    <header className="header_top">
      <form className="Header-form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          className="search-input"
          name="search"
          // ref={searchRef}
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
