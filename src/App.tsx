// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { createElement as e, useState } from "react";
// const e = React.createElement;

function App() {
  const [count, setCount] = useState(0);

  return e("div", { className: "container" }, [
    e("h1", { className: "bg-black", key: 1 }, `aaaaaaa${count}`),
    e(
      "button",
      {
        className: "py-50 px-4 border m-0-auto",
        key: 2,
        onClick: () => setCount(count + 1),
      },
      "click me"
    ),
  ]);
}

export default App;
