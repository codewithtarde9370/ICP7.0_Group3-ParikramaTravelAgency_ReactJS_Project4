import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './views/stays/stays';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element:<Home/>
    }
  //   {
  //     path: "/flights",
  //     element:<Flights/>
  // }
//   {
//     path: "/hotels",
//     element:<Hotels/>
// },
// {
//   path: "/rental",
//   element:<Rental/>
// },
// {
//   path: "/cars",
//   element:<Cars/>
// },
// {
//   path: "/register",
//   element:<Register/>
// }
])

root.render( <RouterProvider router={router}/>);


