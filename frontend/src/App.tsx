import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./Components/Student/Student";
import CreateStudent from "./Components/Student/CreateStudent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />}></Route>
          <Route path="/create" element={<CreateStudent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
