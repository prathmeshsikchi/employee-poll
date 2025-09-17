import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Leaderboard from "./components/Leaderboard";
import Add from "./components/Add";
import PollPage from "./components/PollPage";
import Poll from "./components/Poll";
import NotFound from "./components/NotFound";
import Layout from "./layout";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoutes />}>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route
              path="leadboard"
              element={<Leaderboard></Leaderboard>}
            ></Route>
            <Route path="pollpage/:questionID" element={<PollPage />}></Route>
            <Route path="poll/:questionID" element={<Poll />}></Route>
            <Route path="add" element={<Add></Add>}></Route>
          </Route>
          <Route path="404" element={<NotFound />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
