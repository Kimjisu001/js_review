import { Routes, Route, NavLink } from "react-router-dom";
import BoardList from "./BoardList";
import BoardInfo from "./BoardInfo";
import BoardUpdate from "./BoardUpdate";
import BoardInsert from "./BoardInsert";

export default function App() {
  return (
    <div className="App">
      <h1>Hello react router DOM</h1>
      <ul>
        <li>
          <NavLink to="/">게시판</NavLink>
        </li>
        <li>
          <NavLink to="/boardInsert">게시글등록</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<BoardList />}></Route>
        <Route path="/boardInsert" element={<BoardInsert />}></Route>
        <Route path="/boardInfo/:seq" element={<BoardInfo />}></Route>
        <Route path="/boardUpdate" element={<BoardUpdate />}></Route>
      </Routes>
    </div>
  );
}
