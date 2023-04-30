import { useLocation, Route, Routes } from "react-router-dom";

import Index from "./pages/index";
import Destination from "./pages/destination";
import Navigation from "./components/navigation/nav";
import Technology from "./pages/technology";
import Crew from "./pages/crew";
import ErrorPage from "./pages/error-page";

export default function Router() {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Index />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
