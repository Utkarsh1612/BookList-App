import {  useState } from "react";

const AddBookForm = () => {

    const [formData, setFormData] = useState({
        id: Date.now(),
        book_name: "",
        author_name: "",
        image_url: "",
    });
    const [books, setBooks] = useState([]);

    localStorage.setItem("books", JSON.stringify(books));

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedBooks = [...books, formData];
        setBooks(updatedBooks);

        setFormData({
            id: Date.now(),
            book_name: "",
            author_name: "",
            image_url: "",
        });
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>

            <div className="pb-3 py-5">
                <label htmlFor="book_name">Book Name: </label>
                <input onChange={(e) => handleChange(e)} id="book_name" name="book_name" type="text" className="form-control" value={formData.book_name} required/>
            </div>

            <div className="py-3">
                <label htmlFor="author_name">Book Author:</label>
                <input onChange={(e) => handleChange(e)} id="author_name" name="author_name" type="text" className="form-control" value={formData.author_name} required/>
            </div>
            
            <div className="py-3">
                <label htmlFor="image_url">Book Image URL:</label>
                <input onChange={(e) => handleChange(e)} id="image_url" name="image_url" type="text" className="form-control" value={formData.image_url} required/>
            </div>

            <div className="d-grid py-4">
                <button type="submit" className="btn btn-light">Add Book</button>
            </div>

            
        </form>
    )
}

export default AddBookForm;
