import React,{ useState, MouseEventHandler }  from 'react'
import "../App.css";
import "../Reset.css";

type Props = {
    show: boolean;
    setShow: Function;
    handleClick: MouseEventHandler<HTMLButtonElement>;
    tagList: string[];
  };

  const Modal: React.FC<Props> = ({ show, setShow, handleClick, tagList}) => {
    if (show) {
      return (
        <div id="overlay">
          <div id="content">
            <h1>「投稿画面」</h1>
            <div>
              <label htmlFor="cheese">タイトル</label>
              <input type="text" name="cheese" id="cheese" />
            </div>
            <div>
              <label htmlFor="cheese">日付</label>
              <input type="date" name="cheese" id="cheese" />
            </div>
            <div>
            <label htmlFor="cheese">タグ</label>
              <input type="search" list="list" name="cheese" id="cheese" />
              <datalist id="list">
                {tagList.map((elem) => (
                  <option value={elem} />
                ))}
              </datalist>
            </div>
            <div>
              <label htmlFor="cheese">キーワード</label>
              <input type="text" name="cheese" id="cheese" />
            </div>
            <div>
              <label htmlFor="cheese">URL</label>
              <input type="text" name="cheese" id="cheese" />
            </div>
            <div>
              <label htmlFor="cheese">画像</label>
              <input type="text" name="cheese" id="cheese" />
            </div>
            <button onClick={handleClick}>投稿</button>
            <button onClick={() => setShow(false)}>Close</button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

export default Modal