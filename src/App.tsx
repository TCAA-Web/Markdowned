import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout/MainLayout";
import { WithAuth } from "./layout/WithAuth/WithAuth";
import { Home } from "./pages/Home";
import { CreateNote } from "./pages/CreateNote";
import { DisplayNote } from "./pages/DisplayNote";
import { EditNote } from "./pages/EditNote";
import { SidebarContextProvider } from "./context/SidebarContext";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<WithAuth />}>
            <Route index element={<Home />} />
            <Route path="/create" element={<CreateNote />} />
            <Route path="/update" element={<EditNote />} />
            <Route path="/note/:id" element={<DisplayNote />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
