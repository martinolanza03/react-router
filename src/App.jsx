import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ListPosts from "./pages/ListPosts";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/chi-siamo" element={<About />} />
            <Route path="/lista-post" element={<ListPosts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
