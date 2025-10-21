import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesConfig from '@routes/RoutesConfig';

function App() {
  return (
    <BrowserRouter>
      <RoutesConfig />
    </BrowserRouter>
  );
}

export default App;
