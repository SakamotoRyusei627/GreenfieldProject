
import React from "react";
import { table } from "../globals";
import "./List.css";
import "../Reset.css";

type Props = {
  post: table;
  imgList:string[]
};
const List: React.FC<Props> = ({ post ,imgList}) => {

  return (
    <div className="wrapper">
      <a href={post.url}>
        <div>
          {imgList.includes(post.tag.toLowerCase())
            ? <img src={`./images/${post.tag}.svg`} alt="アイコンtrue" />
            : <img src={`./images/${"溺れる人のピクトグラム"}.svg`} alt="アイコンfalse" />
          }
        </div>
        <div>
          <ul className="explanation">
            <li className="wrapper-title">
              {`${post.title}`}
            </li>
            <li className="wrapper-date">
              {`日時　${post.postedDate}`}
            </li>
            <li className="wrapper-tag">
              {`タグ　${post.tag}`}
            </li>
            <li className="wrapper-keyword">
              {`検索　${post.keyword}`}
            </li>
          </ul>
        </div>
      </a>
    </div>
  );
};

export default List;
