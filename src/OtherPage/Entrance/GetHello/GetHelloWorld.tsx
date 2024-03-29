import { useState, useEffect } from "react";
// import { helloResponse } from "./helloType";

export interface helloResponse {
  message: String;
}

const GetHello = () => {
  const [mesHello, setMesHello] = useState<helloResponse>();

  useEffect(() => {
    fetch("http://127.0.0.1:8080/hello")
      .then((response) => response.json())
      .then((data) => setMesHello(data))
      .catch((error) => setMesHello(error));
  }, []);

  return (
    <div>
      <h2>Message</h2>
      {mesHello?.message}
    </div>
  );
};

export default GetHello;

// import React, { useState, useEffect } from "react";

// const GetHello = () => {
//   const [mesHello, setMesHello] = useState(null);

//   useEffect(() => {
//     fetch("http://127.0.0.1:8080/hello")
//       .then((response) => response.json())
//       .then((data) => setMesHello(data))
//       .catch((error) => setMesHello(error));
//   }, []);

//   return (
//     <div>
//       <h2>Message</h2>
//       {mesHello} {/* Assuming mesHello is a string */}
//     </div>
//   );
// };

// export default GetHello;
