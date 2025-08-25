import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllBooks from "./pages/AllBooks.jsx";
import AddBook from "./pages/AddBook.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App/> },
  { path: "/allbooks", element: <AllBooks/> },
  { path: "/addbook", element: <AddBook/> },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
