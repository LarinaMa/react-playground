import { useState } from "react";

import Header from "./Header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;
