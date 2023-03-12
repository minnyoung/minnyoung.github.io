import React from "react";
import Introduce from "./components/Introduce";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <section>
        <Introduce />
        <main>프로젝트</main>
        <main>스터디</main>
        <main>연락처</main>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
