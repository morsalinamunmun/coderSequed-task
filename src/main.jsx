import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/Main/Layout';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import AuthProvider from './Provider/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard';
import UserProfile from './pages/Dashboard/UserDashboard/Userprofile/UserProfile';
import AddTask from './pages/Dashboard/UserDashboard/AddTask/AddTask';
import AllTask from './pages/Dashboard/UserDashboard/AllTask/AllTask';
import PrivateRoute from './Routes/PrivateRoute';
import TaskList from './pages/TaskList/TaskList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/taskList',
        element: <TaskList/>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: 'home',
        element: <UserProfile />
      },
      {
        path: 'addTask',
        element: <AddTask/>
      },
      {
        path: 'allTask',
        element: <AllTask/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
