import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BoardInsert() {
  let [form, setForm] = useState({});
  const navigator = useNavigate();

  const handlerChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handlerSave = async () => {
    //ajax 등록처리
    await axios.post("http://localhost/board", form);
    //목록
    navigator("/");
  };

  return (
    <>
      <h3>게시글 등록</h3>
      <form>
        제목:
        <input name="title" value={form.title} onChange={handlerChange}></input>
        내용:
        <input
          name="content"
          value={form.content}
          onChange={handlerChange}
        ></input>
        작성자
        <input
          name="writer"
          value={form.writer}
          onChange={handlerChange}
        ></input>
        <button type="button" onClick={handlerSave}>
          저장
        </button>
      </form>
    </>
  );
}
