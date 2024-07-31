import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function BoardInfo() {
  let [board, setBoard] = useState([]);
  const { seq } = useParams();
  const navigator = useNavigate();

  const handlerDelete = async (event) => {
    if (window.confirm("삭제할까요?")) {
      await axios.delete("http://localhost/board/" + seq);
      navigator("/");
    }
  };

  function callAPI() {
    fetch("http://localhost/board/" + seq)
      .then((result) => result.json())
      .then((json) => setBoard(json[0]));
  }
  useEffect(() => {
    callAPI();
  }, []);

  return (
    <>
      <h1>게시글보기</h1>
      <Link to={"/boardUpdate/" + seq}>
        <button>수정</button>
      </Link>
      <button type="button" onClick={handlerDelete}>
        삭제
      </button>
      <table>
        <tbody>
          <tr>
            <td>제목</td>
            <td colSpan="3">{board.title}</td>
          </tr>
          <tr>
            <td>작성자</td>
            <td>{board.writer}</td>
            <td>작성일자</td>
            <td>{board.wdt}</td>
          </tr>
          <tr>
            <td>내용</td>
            <td colSpan="3">{board.content}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
