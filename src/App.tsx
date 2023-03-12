import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <section>
        <main>소개</main>
        <main>프로젝트</main>
        <main>스터디</main>
        <main>연락처</main>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
