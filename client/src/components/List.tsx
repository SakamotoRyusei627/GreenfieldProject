
import React from "react";
import { table } from "../globals";
import "./List.css";
import "../Reset.css";

type Props = {
  post: table;
};
const List: React.FC<Props> = ({ post }) => {
  return (
    <div className="wrapper">
      <a href={post.url}>
        <div>
          <img src="https://picsum.photos/200" alt="参考" />
        </div>
        <div>
          <ul>
            <li className="wrapper-title">
              {`タイトル:${post.title}`}
            </li>
            <li className="wrapper-date">
              {`投稿日時:${post.posted_date}`}
            </li>
            <li className="wrapper-tag">
              {`言語タグ:${post.tag}`}
            </li>
            <li className="wrapper-url">
              {`URL:${post.url}`}
            </li>
          </ul>
        </div>
      </a>
    </div>
  );
};

export default List;
