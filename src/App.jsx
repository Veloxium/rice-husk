import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
