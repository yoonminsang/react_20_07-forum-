import React from "react";
import { Link, useParams } from "react-router-dom";
import "./stylesheets/BoardPaging.css";

const NoticePaging = ({ counting }) => {
  const params = useParams();
  let pageId;
  if (params.pageId) {
    pageId = params.pageId;
  } else {
    pageId = 1;
  }
  const category = params.category;
  const searchType = params.searchType;
  const endCounting = Math.ceil(counting / 50);
  const prevCounting = 1 + 15 * (Math.ceil(pageId / 15) - 2);
  const nextCounting = 1 + 15 * Math.ceil(pageId / 15);
  let list = [];
  let first, prev, next, end;

  if (searchType !== undefined) {
    for (
      let i = 15 * (Math.ceil(pageId / 15) - 1) + 1;
      i <= 15 * (Math.ceil(pageId / 15) - 1) + 15 && i <= endCounting;
      i++
    ) {
      if (i == pageId) {
        list.push(<em key={i}>{i}</em>);
      } else {
        list.push(
          <Link
            to={`/notice/search/${searchType}/Keyword/${params.Keyword}/page/${i}`}
            key={i}
          >
            {i}
          </Link>
        );
      }
    }
    first = (
      <Link to={`/notice/search/${searchType}/Keyword/${params.Keyword}`}>
        처음
      </Link>
    );
    end = (
      <Link
        to={`/notice/search/${searchType}/Keyword/${params.Keyword}/page/${endCounting}`}
      >
        끝
      </Link>
    );
    prev = (
      <Link
        to={`/notice/search/${searchType}/Keyword/${params.Keyword}/page/${prevCounting}`}
      >
        이전
      </Link>
    );
    next = (
      <Link
        to={`/notice/search/${searchType}/Keyword/${params.Keyword}/page/${nextCounting}`}
      >
        다음
      </Link>
    );
  } else {
    for (
      let i = 15 * (Math.ceil(pageId / 15) - 1) + 1;
      i <= 15 * (Math.ceil(pageId / 15) - 1) + 15 && i <= endCounting;
      i++
    ) {
      if (i == pageId) {
        list.push(<em key={i}>{i}</em>);
      } else {
        list.push(
          <Link to={`/notice/page/${i}`} key={i}>
            {i}
          </Link>
        );
      }
    }
    first = <Link to={`/notice`}>처음</Link>;
    end = <Link to={`/notice/page/${endCounting}`}>끝</Link>;
    prev = <Link to={`/notice/page/${prevCounting}`}>이전</Link>;
    next = <Link to={`/notice/page/${nextCounting}`}>다음</Link>;
  }

  return (
    <>
      <div className="bottom_paging_box">
        {pageId > 15 && first}
        {pageId > 15 && prev}
        {list}
        {15 * Math.ceil(endCounting / 15) - pageId >= 15 && next}
        {15 * Math.ceil(endCounting / 15) - pageId >= 15 && end}
      </div>
    </>
  );
};
export default NoticePaging;
