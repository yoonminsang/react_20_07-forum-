import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/ManageMenu.css";

const ManageMenu = () => {
  return (
    <>
      <div className="mMenu">
        <div className="wrap">
          <Link to="/manage">
            <img src="/img/home.png" alt="관리자 홈" />
            <span>관리자 홈</span>
          </Link>
        </div>

        <div className="wrap">
          <strong className="tit_menu">
            <img src="/img/contents.png" alt="콘텐츠" />
            <span>콘텐츠</span>
          </strong>
          <ul className="list_menu">
            <li>
              <Link to="/manage/hit">힛 포럼 관리</Link>
            </li>
            <li>
              <Link to="/manage/hitForum">힛 포럼 게시판 관리</Link>
            </li>
            <li>
              <Link to="/manage/report">신고글 관리</Link>
            </li>
            <li>
              <Link to="/manage/post">전체 글 관리</Link>
            </li>
            <li>
              <Link to="/manage/category">카테고리 관리</Link>
            </li>
            <li>
              <Link to="/manage/notice">공지 관리</Link>
            </li>
          </ul>
        </div>

        <div className="wrap">
          <strong className="tit_menu">
            <img src="/img/statics.png" alt="통계" />
            <span>통계</span>
          </strong>
          <ul className="list_menu">
            <li>
              <Link to="/">방문 통계</Link>
            </li>
            <li>
              <Link to="/">유입 경로</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default ManageMenu;
