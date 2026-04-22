import React from 'react'

import RootLayout from './components/RootLayout'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
       {
        path: 'destination',
        children: [
      { index: true, element: <Navigate to="moon" replace /> },
     { path: ':place', element: <Destination /> }
  ]
},
      {
        path: 'crew',
          children: [
      { index: true, element: <Navigate to="douglas-hurley" replace /> },
     { path: ':person', element: <Crew /> }
  ]
      },
      {
        path: 'technology',
          children: [
      { index: true, element: <Navigate to="launch-vehicle" replace /> },
     { path: ':technology', element: <Technology /> }
  ]
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

