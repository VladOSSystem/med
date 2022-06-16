import React from 'react';
import './assets/styles/main.scss';
import { useTypedSelector } from './hooks/useTypedSelector';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import DashboardMain from './components/dashboard/DashboardMain';
import Page404 from './components/Page404';
import ProtectedRoute, { ProtectedRouteProps } from './components/ProtectedRoute';
import PermissionDenied from './components/dashboard/PermissionDenied';
import BookingTemplate from './components/dashboard/BookingTemplate';
import BookingDetail from './components/dashboard/BookingTemplateDetail';
import MedicalTemplate from './components/dashboard/MedicalTemplate';
import MedicalDetail from './components/dashboard/MedicalTemplateDetail';
import CacheTempate from './components/dashboard/CacheTemplate';
import CacheTemplateDetail from './components/dashboard/CacheTemplateDetail';


const App: React.FC = () => {

  const {success} = useTypedSelector(state => state.auth);
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: success,
    authenticationPath: '/',
  };

  return (
    <Routes>
      <Route path='/' element={<Login setAuth={success}/>}/>
      <Route path='/dashboard' element={<ProtectedRoute {...defaultProtectedRouteProps} roleRequired={'PUBLIC'} outlet={<DashboardMain />} />} />
      <Route path='/booking' element={<ProtectedRoute {...defaultProtectedRouteProps} roleRequired={'USER'} outlet={<BookingTemplate />} />} />
      <Route path='/booking-info/:id' element={<ProtectedRoute {...defaultProtectedRouteProps} roleRequired={'USER'} outlet={<BookingDetail />} />} />
      <Route path='/medical' element={<ProtectedRoute {...defaultProtectedRouteProps} roleRequired={'USER'} outlet={<MedicalTemplate />} />} />
      <Route path='/medical-info/:id' element={<ProtectedRoute {...defaultProtectedRouteProps} roleRequired={'USER'} outlet={<MedicalDetail />} />} />
      <Route path='/cache' element={<ProtectedRoute {...defaultProtectedRouteProps} roleRequired={'PUBLIC'} outlet={<CacheTempate />} />} />
      <Route path='/cache-info/:id' element={<ProtectedRoute {...defaultProtectedRouteProps} roleRequired={'PUBLIC'} outlet={<CacheTemplateDetail />} />} />
      <Route path="/denied" element={<ProtectedRoute {...defaultProtectedRouteProps} roleRequired={'PUBLIC'} outlet={<PermissionDenied />} />}/>
      <Route path='*' element={<Page404/>} />
    </Routes>
  );
}

export default App;
