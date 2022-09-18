import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import ContactMe from "./contactMe";
import NotFound from "./notFound";
import Portfolio from "./portfolio";

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <div className="xl:mb-4 mb-16">
                    <NavBar />
                    <div className="xl:mx-80 mx-4 mt-6">
                        <Routes>
                            <Route path="/" element={<App />} />
                            <Route path="/contactme" element={<ContactMe />} />
                            <Route path="/portfolio" element={<Portfolio />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    );
}
