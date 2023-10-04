import React from "react";
const e = React.createElement;

function App() {
  // return <h1>hello</h1>;
  return e("h1", {}, [
    e(
      "p",
      { className: "parag" },
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem nostrum culpa consequuntur dignissimos eveniet sint rerum illo, magni quos optio quibusdam soluta earum quia architecto recusandae iusto neque incidunt praesentium"
    ),
    e("button", { className: "Button" }, "click me"),
  ]);
}

export default App;
