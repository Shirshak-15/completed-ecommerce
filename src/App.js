import './App.css';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './routes/PageRoutes';


function App() {
return (
  <BrowserRouter>
    <PageRoutes></PageRoutes>
  </BrowserRouter>
);

  
}

export default App;
