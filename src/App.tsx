//import "./scss/main.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { MainLayout } from "./layout/MainLayout/MainLayout";
import { WithAuth } from "./layout/WithAuth/WithAuth";
import { Home } from "./pages/Home";
import { CreateNote } from "./pages/CreateNote";
import { DisplayNote } from "./pages/DisplayNote";
import { EditNote } from "./pages/EditNote";
import { NextUIProvider } from "@nextui-org/react";
function App() {
  const navigate = useNavigate();

  return (
    <main className="dark text-foreground bg-background">
      <NextUIProvider navigate={navigate}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<WithAuth />}>
              <Route index element={<Home />} />
              <Route path="/create" element={<CreateNote />} />
              <Route path="/update/:id" element={<EditNote />} />
              <Route path="/note/:id" element={<DisplayNote />} />
            </Route>
          </Route>
        </Routes>
      </NextUIProvider>
    </main>
  );
}

export default App;
