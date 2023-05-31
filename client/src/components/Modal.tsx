import React, { useState, MouseEventHandler, RefObject } from "react";
import "./Modal.css";
import "../Reset.css";
import { table } from "../globals";

type Props = {
  show: boolean;
  setShow: Function;
  tagList: string[];
  inputRef: RefObject<HTMLInputElement>;
  setValue: Function;
  value: table[];
};

const Modal: React.FC<Props> = ({
  show,
  setShow,
  tagList,
  inputRef,
  value,
  setValue,
}) => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const postingYear = String(new Date().getFullYear());
    const postingMonth = String(new Date().getMonth() + 1).padStart(2, "0");
    const postingDate = String(new Date().getDate()).padStart(2, "0");

    const result= {
      title: e.target.title.value,
      postedDate: `${postingYear}-${postingMonth}-${postingDate}`,
      tag: e.target.tag.value,
      keyword: e.target.keyword.value,
      url: e.target.url.value,
      All: "",
    };
    const resultAll = `${result.title},${result.tag},${result.keyword},${result.postedDate}`;
    result.All = resultAll.toLowerCase();
    const maxId = Math.max(...value.map((e) => e.id));
    console.log({ maxId });

    // const fetchData = await fetch(`http://localhost:8000/send/${maxId}`, {
    //   method: "POST",
    //   body: JSON.stringify(result)
    // }).then(res => res.json());

    // setValue([...value, ...fetchData]);
    setValue([...value, result]);
    setShow(false);
  };

  if (show) {
    return (
      <div id="overlay">
        <div id="content">
          <form onSubmit={handleSubmit} className="Modal_form">
            <h1>NEW POST</h1>
            <div>
              {/* <label htmlFor="title">タイトル</label> */}
              <input
                ref={inputRef}
                type="text"
                name="title"
                id="title"
                placeholder=" Title"
                required
              />
            </div>
            {/* <div>
              <label htmlFor="date">日付</label>
              <input type="date" name="date" id="date" />
            </div> */}
            <div>
              {/* <label htmlFor="tag">タグ</label> */}
              <input
                type="text"
                list="list"
                name="tag"
                id="tag"
                placeholder=" Tag"
              />
              <datalist id="list">
                {tagList.map((elem, index) => (
                  <option value={elem} key={index} />
                ))}
              </datalist>
            </div>
            <div>
              {/* <label htmlFor="keyword">検索キーワード</label> */}
              <input
                type="text"
                name="keyword"
                id="keyword"
                placeholder=" Keyword"
              />
            </div>
            <div>
              {/* <label htmlFor="url">URL</label> */}
              <input type="text" name="url" id="url" placeholder=" URL" />
            </div>
            {/* <div>
              <label htmlFor="image">画像</label>
              <input type="text" name="image" id="image" />
            </div> */}
            <button type="submit">POST</button>
            <button onClick={() => setShow(false)}>CLOSE</button>
          </form>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
