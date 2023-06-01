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

    const result = {
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
    console.log(result);

    const fetchData = await fetch(`http://localhost:8000/send/${maxId}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'  //
      },
      body: JSON.stringify(result),
    }).then((res) => res.json());
    console.log(fetchData);
    // //バックエンド開放後
    setValue([...value, ...fetchData]);

    setShow(false);
  };

  if (show) {
    return (
      <div id="overlay">
        <div id="content">
          <form onSubmit={handleSubmit} className="Modal_form">
            <h1>NEW POST</h1>
            <div>
              <input
                ref={inputRef}
                type="text"
                name="title"
                id="title"
                placeholder=" Title"
                required
              />
            </div>

            <div>
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
              <input
                type="text"
                name="keyword"
                id="keyword"
                placeholder=" Keyword"
              />
            </div>
            <div>
              <input type="text" name="url" id="url" placeholder=" URL" />
            </div>
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
