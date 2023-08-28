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
    Contact,
    Footer,
} from "./components";

function App() {
    return (
        <>
            <div className="w-[100vw] fixed flex justify-center bg-white z-[99]">
                <div className="max-w-[1200px]">
                    <NavBar />
                </div>
            </div>

            <div className="mt-[150px] w-[100vw] flex flex-col items-center">
                <Hero />
                <Companies />
                <Services />
                <CTABanner />
                <CaseStudies />
                <WorkingProcess />
                <Team />
                <Testimonials />
                <Contact />
                <Footer />
            </div>
        </>
    );
}

export default App;
