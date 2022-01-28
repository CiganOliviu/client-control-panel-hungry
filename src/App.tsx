import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { appMapRoutes } from './helpers/appMapRoutes';
import Error404Page from './pages/Error404Page/Error404Page';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={ appMapRoutes.MainSectionRoute } element={ <MainPage /> } />
                <Route path={ appMapRoutes.LoginSectionRoute } element={ <LoginPage /> } />
                <Route path={ appMapRoutes.ErrorSectionRoute } element={ <Error404Page /> } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
