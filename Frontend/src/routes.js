import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import CablePage from './pages/AssetManagementPages/CablePage';
import DevicePage from './pages/AssetManagementPages/DevicePage';
import NetworkdevicePage from './pages/AssetManagementPages/NetworkdevicePage';
import MonitorPage from './pages/AssetManagementPages/MonitorPage';
import PrinterPage from './pages/AssetManagementPages/PrinterPage';
import CatridgePage from './pages/AssetManagementPages/CatridgePage';
import ComputerPage from './pages/AssetManagementPages/ComputerPage';
// import SoftwarePage from './pages/AssetManagementPages/ComputerPage';
import ConsumablePage from './pages/AssetManagementPages/ConsumablePage';
import EnclosurePage from './pages/AssetManagementPages/EnclosurePage';
import GlobalPage from './pages/AssetManagementPages/GlobalPage';
// import TicketPage from './pages/TicketPage';
import CreateTicket from './pages/CreateTicket';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'assets', element: <UserPage /> },
        { path: 'computers', element: <ComputerPage /> },
      //  { path: 'softwares', element: <SoftwarePage /> },
      //  { path: 'printers', element: <PrinterPage /> },
        { path: 'cables', element: <CablePage /> },
        { path: 'catridges', element: <CatridgePage /> },
        { path: 'consumables', element: <ConsumablePage /> },
        { path: 'devices', element: <DevicePage /> },
        { path: 'Networkdevices', element: <NetworkdevicePage /> },
        { path: 'printers', element: <PrinterPage /> },
        { path: 'enclosures', element: <EnclosurePage /> },
        { path: 'globals', element: <GlobalPage /> },
        { path: 'monitors', element: <MonitorPage /> },
        { path: 'ticket', element: <CreateTicket /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
