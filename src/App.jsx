import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./features/authentication/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
