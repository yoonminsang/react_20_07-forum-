import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./stylesheets/ManageHeader.css";

const ManageHeader = () => {
  useEffect(() => {
    document.title = "M's forum 관리자 ";
    window.scrollTo(0, 0);
  }, []);
  return (
    <header className="manage_header">
      <h1>
        <a href="/manage">관리자 페이지</a>
      </h1>
      <Link to="/manage/notice/create" className="create">
        공지 쓰기
      </Link>
      <Link to="/" className="home">
        <img src="/img/home.png" alt="홈" />
      </Link>
    </header>
  );
};
export default ManageHeader;
