import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MyNotes from "./pages/MyNotes";
import ArchivedNotes from "./pages/ArchivedNotes";
import SharedNote from "./pages/SharedNote";
import LoginForm from "./components/LoginForm";
import LoginSignup from "./pages/LoginSignup";
import SignupForm from "./components/SignupForm";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />

                <Route path="/login-signup" element={<LoginSignup />}>
                    <Route index element={<LoginForm />} />
                    <Route path="login" element={<LoginForm />} />
                    <Route path="signup" element={<SignupForm/>}/>
                </Route>
                
                <Route path="/my-notes" element={<MyNotes />} />
                <Route path="/archived-notes" element={<ArchivedNotes />} />
                <Route path="/shared/:id" element={<SharedNote />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
