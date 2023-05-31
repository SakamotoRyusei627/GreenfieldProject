
import React from "react";
import { table } from "../globals";
import "./List.css";
import "../Reset.css";

type Props = {
  post: table;
  imgList:string[]
};
const List: React.FC<Props> = ({ post ,imgList}) => {
  // console.log("###################################");
  // console.log(imgList);
  // console.log(post.tag.toLowerCase());
  // console.log(imgList.includes(post.tag.toLowerCase()));
  // const postTag
  
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
          <ul>
            <li className="wrapper-title">
              {`【${post.title}】`}
            </li>
            <li className="wrapper-date">
              {`投稿日時:${post.postedDate}`}
            </li>
            <li className="wrapper-tag">
              {`言語タグ:${post.tag}`}
            </li>
            <li className="wrapper-keyword">
              {`検索:${post.keyword}`}
            </li>
          </ul>
        </div>
      </a>
    </div>
  );
};

export default List;
