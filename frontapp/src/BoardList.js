import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BoardList() {
  let [boards, setBoards] = useState([]);
  let [lastPage, setLastPage] = useState(1);
  const location = useLocation();
  let search = new URLSearchParams(location.search);
  const p_page = search.get("page");
  const page = p_page === null ? 1 : Number(p_page);

  function callAPI() {
    fetch(`http://localhost/board?page=${page}`)
      .then((result) => result.json())
      .then((json) => {
        setBoards(json.result);
        setLastPage(Math.ceil(json.total / 10)); //125=>10 12.5=>13
      });
  }
  useEffect(() => {
    callAPI();
  }, [page]);
  return (
    <div>
      <Link to="/boardInsert">
        <button>글쓰기</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성일</th>
            <th>이름</th>
          </tr>
        </thead>
        <tbody>
          {boards.map((board) => (
            <tr key={board.seq}>
              <td>{board.seq}</td>
              <td>
                <Link to={"/boardInfo/" + board.seq}>{board.title}</Link>
              </td>
              <td>{board.writer}</td>
              <td>{board.wdt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {lastPage}

      {[...Array(lastPage)].map((p, i) => (
        <Link to={"/?page=" + i}>{i}</Link>
      ))}
    </div>
  );
}
