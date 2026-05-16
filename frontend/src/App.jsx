import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MyNotes from "./pages/MyNotes";
import ArchivedNotes from "./pages/ArchivedNotes";
import SharedNote from "./pages/SharedNote";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} /> */}
                <Route path="/my-notes" element={<MyNotes />} />
                <Route path="/archived-notes" element={<ArchivedNotes />} />
                <Route path="/shared/:id" element={<SharedNote />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
