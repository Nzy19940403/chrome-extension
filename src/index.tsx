 import * as ReactDOM from 'react-dom/client'
 import { BrowserRouter } from 'react-router-dom'
import App from './app'



const root = ReactDOM.createRoot(document.getElementById('app')!)
// v18 的新方法
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    
)

 

