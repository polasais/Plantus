import { Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { HomePage } from "./pages/homepage/HomePage";
import { Results } from "./pages/results/Results";
import { Garden } from "./pages/garden/Garden";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="results" element={<Results />} />
                <Route path="garden" element={<Garden />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
