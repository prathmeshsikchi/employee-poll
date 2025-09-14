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

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/leadboard" element={<Leaderboard></Leaderboard>}></Route>
        <Route path="/pollpage/:questionID" element={<PollPage />}></Route>
        <Route path="/poll/:questionID" element={<Poll />}></Route>
        <Route path="/404" element={<NotFound />}></Route>
        <Route path="/add" element={<Add></Add>}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
