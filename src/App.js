import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Form1 from "./pages/Form1";
import Form2 from "./pages/Form2";
import Form3 from "./pages/Form3";

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap pages inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Form1 />} />
          <Route path="dashboard" element={<Form2 />} />
          <Route path="notes" element={<Form3 />} />
          <Route path="/layers" element={<Form3 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
