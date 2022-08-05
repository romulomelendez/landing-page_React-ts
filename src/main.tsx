import ReactDOM from 'react-dom/client'

import { App } from './App'

import { GlobalStyle } from './global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <>

    <GlobalStyle />
    <App />
    
  </>

)
