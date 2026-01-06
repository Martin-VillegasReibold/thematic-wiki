import { useState, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header.jsx";
import Layout from "./components/Layout.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import { ROUTES } from "./const/index";
import { AnimatedRoutes } from "./components/PageTransition.jsx"; // Import helper

const Timeline = lazy(() => import("./pages/Timeline.jsx"));
const CategoryPage = lazy(() => import("./pages/CategoryPage.jsx"));
const CharPage = lazy(() => import("./pages/CharPage.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const Details = lazy(() => import("./pages/Details.jsx"));

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="clay-tablet-container max-w-7xl mx-auto bg-clay rounded-lg sm:rounded-xl shadow-2xl overflow-hidden border-2 sm:border-4 border-border">
        <BrowserRouter>
          <Header onSearch={setSearchResults} />
          <Layout>
            <Sidebar />
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-[50vh] w-full">
                <div className="text-ink font-title text-xl animate-pulse">Loading Tablet...</div>
              </div>
            }>
              <AnimatedRoutes>
                <Route path={ROUTES.home} element={<Home />} />
                <Route path={ROUTES.globalSearch} element={<CategoryPage items={searchResults} />} />
                <Route path={ROUTES.timeline} element={<Timeline />} />
                <Route path={ROUTES.lore} element={<CategoryPage category="timeline" />} />
                <Route path={ROUTES.characters} element={<CategoryPage category="characters" />} />
                <Route path={ROUTES.charPage} element={<CharPage />} />
                
                {/* Dynamic Category Pages */}
                {[
                  'places', 'techniques', 'weapons', 'creatures', 'factions', 'glossary'
                ].map((category) => (
                   <Route 
                    key={category} 
                    path={`/${category}`} 
                    element={<CategoryPage category={category} basePath={`/${category}`} />} 
                  />
                ))}

                <Route path={ROUTES.details} element={<Details />} />
                <Route path={ROUTES.notFound} element={<NotFound />} />
              </AnimatedRoutes>
            </Suspense>
          </Layout>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
