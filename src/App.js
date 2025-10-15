import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/header";
import AuthForm from "./components/authForm";
import Chat from "./components/chat";
import Posts from "./components/posts";
import DMQueue from "./components/dmCola";
import { listenPosts } from "./components/store/postSlice";
import { listenNotifications } from "./components/store/notificationSlice";
import { listenQueue } from "./components/store/dmColaSlice";
import { startAuthListener } from "./components/store/authSlice";
import { listenMessages } from "./components/store/chatSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listenPosts());
    dispatch(listenNotifications());
    dispatch(listenQueue());
    dispatch(startAuthListener());
    dispatch(listenMessages());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <AuthForm />
      <Posts />
      <Chat />
      <DMQueue />
    </div>
  );
}

export default App;
