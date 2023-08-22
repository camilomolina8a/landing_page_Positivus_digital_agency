import "./App.css";
import {
    NavBar,
    Hero,
    Companies,
    Services,
    CTABanner,
    CaseStudies,
    WorkingProcess,
    Team,
    Testimonials,
} from "./components";

function App() {
    return (
        <>
            <NavBar />
            <Hero />
            <Companies />
            <Services />
            <CTABanner />
            <CaseStudies />
            <WorkingProcess />
            <Team />
            <Testimonials/>
        </>
    );
}

export default App;
