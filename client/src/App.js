import React from "react";
import { useFetchList, STUDENT, LIBRARY, BOOK } from "./Services/Api";

function App() {
  const library = useFetchList(STUDENT);
  const book = useFetchList(LIBRARY);
  const student = useFetchList(BOOK);

  return (
    <div className="App">
      <>{book.state === "LOADED" && <h1>Everything loaded</h1>}</>
    </div>
  );
}

export default App;
