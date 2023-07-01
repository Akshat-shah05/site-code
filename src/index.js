import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Router import
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Pages Imports
import Contact from './pages/contact/Contact'
import AboutMe from './pages/About/aboutMe'
import Papers from './pages/Papers/Papers'
import Projects from './pages/Projects/Projects'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "contact",
    element: <Contact />, /* Contact page routing */
  },
  {
    path: "home",
    element: <App />, /* Contact page routing */
  },
  {
    path: "about-me",
    element: <AboutMe />, /* About me page page routing */
  },
  {
    path: "papers",
    element: <Papers />, /* Papers Page routing */
  },
  {
    path: "projects",
    element: <Projects /> /* Projects Page routing */
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
