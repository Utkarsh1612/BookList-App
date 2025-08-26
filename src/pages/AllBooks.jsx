import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BookContext from "../contexts/BookContext";

const AllBooks = () => {
  const { books, setBooks } = useContext(BookContext);
  console.log("books :", books);

  const handleToggle = (id) => {
    const data = JSON.parse(localStorage.getItem("books"));
    const updateData = data.map((book) =>
      book.id === id
        ? { ...book, status: book.status === "Read" ? "Unread" : "Read" }
        : book
    );
   const updateBooks = books.map((book) =>
      book.id === id
        ? { ...book, status: book.status === "Read" ? "Unread" : "Read" }
        : book
    );
    setBooks(updateBooks);
    localStorage.setItem("books", JSON.stringify(updateData));
  };

  const handleDelete = (id) => {
    const data = JSON.parse(localStorage.getItem("books"));
    const updatedData = data.filter((book) => book.id != id);
    const updatedBooks = books.filter((book) => book.id != id);
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedData));
  };

  const filterBooks = (filter) => {
    const data = JSON.parse(localStorage.getItem("books"));
    const updatedBooks = filter === "All" ? data : data.filter((book) => book.status === filter);
    console.log(updatedBooks);
    setBooks(updatedBooks)
  }

  const booksData = JSON.parse(localStorage.getItem("books"));
  const totalBooks = booksData.length;
  const readBooks = booksData.reduce((acc, curr) => {
    if(curr.status === "Read"){
      return acc + 1;
    }
    return acc;
  }, 0);
  const unreadBooks = booksData.reduce((acc, curr) => {
    if(curr.status === "Unread"){
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div className="bg-success">
      <Header />

      <section className="container d-flex justify-content-end mt-5 mb-3">
          <button onClick={() => {filterBooks("All")}} className="btn btn-light">All Books{`(${totalBooks})`}</button>
          <button onClick={() => {filterBooks("Read")}} className="btn btn-light ms-4">Read Books{`(${readBooks})`}</button>
          <button onClick={() => {filterBooks("Unread")}} className="btn btn-light ms-4">Unread Books{`(${unreadBooks})`}</button>
      </section>

      <main style={{height: "100%"}} className="container bg-success  mb-5">
        <div className="row">
          {books.length === 0 ? <div style={{height: "500px"}} className="d-grid justify-content-center align-items-center text-white display-6">Empty List. No Book Found!</div> : books.map((book) => (
            <div className="col-md-3 mb-3" key={book.id}>
              <div className="card h-100">
                <img
                  className="card-img-top h-100"
                  src={book.image_url}
                  alt="photo"
                />
                <div className="card-footer">
                  <h5>{book.book_name}</h5>
                  <p>by {book.author_name}</p>
                  <div className="d-flex justify-content-between">
                    <button
                    onClick={() => handleToggle(book.id)}
                    className="btn btn-success"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-book"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                    </svg>{" "}
                    {book.status}
                  </button>
                  <button
                    onClick={() => handleDelete(book.id)}
                    className="btn btn-danger ms-5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>{" "}
                    Delete
                  </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllBooks;
