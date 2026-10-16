import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoadingProvider } from "./context/LoadingProvider";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const JarvisCaseStudy = lazy(() => import("./pages/JarvisCaseStudy"));

const Home = () => (
  <LoadingProvider>
    <Suspense>
      <MainContainer>
        <Suspense><CharacterModel /></Suspense>
      </MainContainer>
    </Suspense>
  </LoadingProvider>
);

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/jarvis" element={<Suspense fallback={null}><JarvisCaseStudy /></Suspense>} />
  </Routes>
);

const App = () => <BrowserRouter><AppRoutes /></BrowserRouter>;

export default App;
