import React from "react";
const e = React.createElement;

function App() {
  return e("div", { className: "container" }, [
    e("h1", { className: "bg-black", key: 1 }, "aaaaaaa"),
    e("button", { className: "py-2 px-4 border", key: 2 }, "click me"),
  ]);
}

export default App;
