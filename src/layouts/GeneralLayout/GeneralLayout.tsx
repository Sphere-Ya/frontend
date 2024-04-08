/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './GeneralLayout.scss';

export default function GeneralLayout() {
  return (
    <div className="general-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}