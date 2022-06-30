import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DIaryList";

const dummyList = [
  {
    id: 1,
    author: "양현종",
    content: "하이 1",
    emotion: 5,
    created_date: new Date().getTime(),
  },

  {
    id: 2,
    author: "임병욱",
    content: "하이 2",
    emotion: 1,
    created_date: new Date().getTime(),
  },

  {
    id: 3,
    author: "김소연",
    content: "하이 3",
    emotion: 2,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
