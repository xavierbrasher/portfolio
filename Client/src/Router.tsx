import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import ContactMe from "./contactMe";
import NotFound from "./notFound";
import DiscordJS from "./portfolio/discordjs";
import NameAndAge from "./portfolio/name-and-age";
import Portfolio from "./portfolio/index";
import StickItIn from "./portfolio/stick-it-in";

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
                            <Route
                                path="/portfolio/stick-it-in"
                                element={<StickItIn />}
                            />
                            <Route
                                path="/portfolio/discordbot"
                                element={<DiscordJS />}
                            />
                            <Route
                                path="/portfolio/name-and-age"
                                element={<NameAndAge />}
                            />

                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    );
}
