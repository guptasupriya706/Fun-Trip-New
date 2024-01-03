import logo from './logo.svg';
import './App.css';
import MainPage from './Pages/main-page/MainPage';
import GalleryPage from './Pages/gallery/GalleryPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RegistrationForm from './Pages/login-registration/RegistrationForm';
import Login from './Pages/login-registration/Login';
import BookingContainer from './Pages/booking/BookingContainer';
import AboutUsPage from './Pages/aboutUs/AboutUsPage';
import UnitedState from './Pages/packages/UnitedState';
import IndiaPackage from './Pages/packages/IndiaPackage';
import FrancePackage from './Pages/packages/FrancePackage';
import GermanyPackage from './Pages/packages/GermanyPackage';
import ServicesPage from './Pages/Services/ServicesPage';

function App() {
  return (
    <>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/home"
                        element={<MainPage />}
                    />
                    <Route
                        exact
                        path="/booking"
                        element={<BookingContainer />}
                    />
                    <Route
                        exact
                        path="/about"
                        element={<AboutUsPage />}
                    />
                    <Route
                        exact
                        path="/UnitedState"
                        element={<UnitedState />}
                    />
                    <Route
                        exact
                        path="/IndiaPackage"
                        element={<IndiaPackage />}
                    />
                    <Route
                        exact
                        path="/FrancePackage"
                        element={<FrancePackage />}
                    />
                    <Route
                        exact
                        path="/GermanyPackage"
                        element={<GermanyPackage />}
                    />
                    <Route
                        exact
                        path="/ServicesPage"
                        element={<ServicesPage />}
                    />
                    <Route
                        exact
                        path="/register"
                        element={<RegistrationForm />}
                    />
                    <Route
                        exact
                        path="/login"
                        element={<Login />}
                    />
                    <Route
                        exact
                        path="/"
                        element={<MainPage />}
                    />
                    <Route
                        path="/gallery"
                        element={<GalleryPage />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
        </>
  );
}

export default App;
