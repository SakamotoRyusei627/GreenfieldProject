
import React from "react";
import List from "./List";
import { table } from "../globals";
import "./SearchList.css";
import "../Reset.css";

type Props = {
  filterValue: table[];
  imgList:string[]
};

const SearchList: React.FC<Props> = ({ filterValue, imgList }) => {
  return (
    <div className="flex_test-box">
      {filterValue.map((post, index) => (
        <List post={post} key={index} imgList={imgList}/>
      ))}
    </div>
  );
};

export default SearchList;
