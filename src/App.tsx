import { LandingPage } from './page/LandingPage'
import { TheNavBar } from './components/TheNavBar'

import { PageContextProvider } from './Contexts/PageContext'

export const App: React.FC = () => (

    <PageContextProvider>

        <TheNavBar />
        <LandingPage />
        
    </PageContextProvider>
    
)