import React, { useState } from "react";
import { useInput } from "../hooks";

const MaCategory_AddItems = ({
  categoryCancle,
  categoryConfirm,
  allSubject,
}) => {
  const nameMaxLen = (value) => value.length <= 20;
  const name = useInput("", nameMaxLen);
  const [menu, setMenu] = useState(false);
  const changeMenu = () => {
    menu === true ? setMenu(false) : setMenu(true);
  };
  const [subjectName, setSubjectName] = useState("주제없음");
  const [subjectId, setSubjectId] = useState(1);

  return (
    <>
      <div className="bundle_item">
        <div className="item_order">
          <form
            className="edit_item"
            onSubmit={categoryConfirm(name.value, subjectId, subjectName)}
          >
            <input type="text" className="tf_blog" {...name}></input>
            <div className={menu === true ? "opt_blog opt_open" : "opt_blog"}>
              <button type="button" className="btn_opt" onClick={changeMenu}>
                {subjectName}
                <span className="ico_blog ico_open"></span>
              </button>
              <div className="layer_opt">
                <ul className="list_opt">
                  {allSubject.map((subject, index) => (
                    <li key={index}>
                      <input
                        id={subject.id}
                        type="button"
                        value={subject.name}
                        onClick={() => {
                          setSubjectName(subject.name);
                          setSubjectId(subject.id);
                          setMenu(false);
                        }}
                      ></input>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order_btn">
              <button
                type="reset"
                className="btn_cancel"
                onClick={categoryCancle}
              >
                취소
              </button>
              {name.value.length === 0 ? (
                <button type="submit" className="btn_default btn_off" disabled>
                  확인
                </button>
              ) : (
                <button type="submit" className="btn_default">
                  확인
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default MaCategory_AddItems;
