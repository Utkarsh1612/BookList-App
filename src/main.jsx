import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllBooks from "./pages/AllBooks.jsx";
import AddBook from "./pages/AddBook.jsx";
import BookContext from "./contexts/BookContext.js";
import useBookState from "./customHooks/useBookState.js";

const router = createBrowserRouter([
  { path: "/", element: <App/> },
  { path: "/allbooks", element: <AllBooks/> },
  { path: "/addbook", element: <AddBook/> },
])

const BookContextProvider = ({children}) => {
  const {books, setBooks} = useBookState();
   return (
    <BookContext.Provider value={{books, setBooks}}>
      {children}
    </BookContext.Provider>
   )
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookContextProvider>
      <RouterProvider router={router}/>
    </BookContextProvider>
  </StrictMode>
);
