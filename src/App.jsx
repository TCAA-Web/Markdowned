import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Create } from "./pages/Create";
import { Delete } from "./pages/Delete";
import { Update } from "./pages/Update";
import { Home } from "./pages/Home";
import { WithAuth } from "./layout/WithAuth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<WithAuth />}>
            <Route index element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/update" element={<Update />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
