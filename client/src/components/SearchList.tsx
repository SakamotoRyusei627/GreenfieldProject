
import React from "react";
import List from "./List";
import { table } from "../globals";
import "./SearchList.css";
import "../Reset.css";

type Props = {
  value: table[];
};

const SearchList: React.FC<Props> = ({ value }) => {
  return (
    <div className="flex_test-box">
      {value.map((post, index) => (
        <List post={post} key={index} />
      ))}
    </div>
  );
};

export default SearchList;
