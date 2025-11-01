import { Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { HomePage } from "./pages/homepage/HomePage";
import { Results } from "./pages/results/Results";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="results" element={<Results />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
