import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { appMapRoutes } from './helpers/appMapRoutes';
import CountriesPage from './pages/CountriesPage/CountriesPage';
import CountryDetailPage from './pages/CountriesPage/CountryDetailPage';
import Error404Page from './pages/Error404Page/Error404Page';
import LoginPage from './pages/LoginPage/LoginPage';
import SchemasPage from './pages/SchemasPage/SchemasPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={ appMapRoutes.SchemasPage } element={ <SchemasPage /> } />
                <Route path={ appMapRoutes.LoginSectionRoute } element={ <LoginPage /> } />
                <Route path={ appMapRoutes.CountrySectionRoute } element={ <CountryDetailPage/> } />
                <Route path={ appMapRoutes.CountriesSectionRoute } element={ <CountriesPage /> } />
                <Route path={ appMapRoutes.ErrorSectionRoute } element={ <Error404Page /> } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
