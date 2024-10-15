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
import ReactGA from "react-ga4";
import { NextUIProvider, Spinner } from "@nextui-org/react";
import { SideBarContextProvider } from "./context/SidebarContext";
import { HomeContextProvider } from "./context/HomepageContext";

function App() {
  const navigate = useNavigate();

  ReactGA.initialize([
    {
      trackingId: "G-FXDM5N6YFT",
    },
  ]);

  return (
    <NextUIProvider navigate={navigate}>
      <main className="dark text-foreground bg-background">
        <SideBarContextProvider>
          <HomeContextProvider>
            <Routes>
              <Route path="/" element={<WithAuth />}>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path="/create" element={<CreateNote />} />
                  <Route path="/update/:id" element={<EditNote />} />
                  <Route path="/note/:id" element={<DisplayNote />} />
                </Route>
              </Route>
            </Routes>
          </HomeContextProvider>
        </SideBarContextProvider>
      </main>
    </NextUIProvider>
  );
}

export default App;
