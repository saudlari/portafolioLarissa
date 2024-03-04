import "w3-css/w3.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";
import Infografias from "./pages/Infografias/Infografias";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="infografias" element={<Infografias />} />
          <Route path="infografias/:id" element={<Infografias />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}
