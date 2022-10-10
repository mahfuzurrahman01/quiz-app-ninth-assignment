import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog';
import Error from './Components/Error';
import Home from './Components/Home';
import Main from './Components/Main';
import Quiz from './Components/Quiz';
import Statistics from './Components/Statistics';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/quiz',
        element: <Quiz></Quiz>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
  
])
function App() {
  return (
   <RouterProvider router={router}>
   </RouterProvider>
  );
}

export default App;
