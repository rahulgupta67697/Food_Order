import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Kfc from './components/Kfc.jsx';
import App from './App.jsx';
import Body from './components/Body.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import ResList from './components/ResList.jsx';
import KfcList from './components/Kfc.jsx';
import Macdo from './components/Macdo.jsx';
import Form from './components/Form.jsx';
import { Provider } from 'react-redux';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Body /> },
      { path: 'about/:id', element: <About /> },
      { path: 'contact/:id', element: <Contact /> },
      { path: 'kfc/:id', element: <KfcList /> },
      { path: 'mcdo/:id', element: <Macdo /> },
      { path: 'reslist/:id', element: <ResList /> },
      { path: 'form', element: <Form /> },
       { path: '/kfc/:id', element: <Kfc /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router} />
 
  </React.StrictMode>
);
