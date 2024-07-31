import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BoardList() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/board")
      .then((response) => setBoards(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>게시판 목록</h2>
      <ul>
        {boards.map((board) => (
          <li key={board.id}>
            <Link to={`/boardList/${board.id}`}>{board.id}</Link>

            <Link to={`/boardList/${board.title}`}>제목: {board.title}</Link>

            <Link to={`/boardList/${board.content}`}>
              내용: {board.content}
            </Link>

            <Link to={`/boardList/${board.writer}`}>
              작성자: {board.writer}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BoardList;
