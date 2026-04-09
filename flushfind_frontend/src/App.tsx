import { Routes, Route } from "react-router";
import MapPage from "./pages/MapPage";
import ProfilePage from "./pages/ProfilePage";
import ChatPage from "./pages/ChatPage";
import NavBar from "./components/Menu/NavBar";
import RestroomPage from "./pages/RestroomPage";
import ChatRoom from "./components/Chat/ChatRoom/ChatRoom";

import SignupPage from "./pages/Registration/SignupPage";
import EmailNavigationPage from "./pages/Registration/EmailNavigationPage";
import EmailConfirmedPage from "./pages/Registration/EmailConfirmedPage";
import EmailFailedPage from "./pages/Registration/EmailFailedPage";

import LoginPage from "./pages/Authentication/LoginPage";

import TwoFactorAuth from "./pages/Authentication/TwoFactorAuth";
import NotFound from "./pages/Error/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MapPage />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/confirm" element={<EmailNavigationPage />} />
        <Route path="/signup/verified" element={<EmailConfirmedPage />} />
        <Route path="/signup/failed" element={<EmailFailedPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/authenticate" element={<TwoFactorAuth />} />

        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chat" element={<ChatPage />}>
          <Route path=":chatroomid" element={<ChatRoom />} />
        </Route>
        <Route path="/restroom/:id" element={<RestroomPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
