
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {ThemeProvider} from '../context/ThemeContext';

export default function MainLayout({ children }) {
  return (
    <ThemeProvider>
      <Header/>
      <main>{children}</main> 
      <Footer/>
    </ThemeProvider>
  )
}
