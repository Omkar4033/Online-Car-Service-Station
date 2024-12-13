import React from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';

const App = () => (
  <div className="  bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
    
    <Navbar userRole="admin" isLoggedIn={false} />

    
    {/* Main Routes */}
    <div className="container mx-auto px-4 py-6">
      <AppRoutes />
    </div>

    <Footer/>
     
  </div>
);

export default App;
