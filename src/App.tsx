import { LandingPage } from "./page/LandingPage";
import { TheNavBar } from "./components/TheNavBar";

import { PageContextProvider } from "./contexts/PageContext";

export const App: React.FC = () => (
  <PageContextProvider>
    <TheNavBar />
    <LandingPage />
  </PageContextProvider>
);
