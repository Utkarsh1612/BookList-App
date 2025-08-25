import AddBookForm from "../components/AddBookForm";
import Footer from "../components/Footer"
import Header from "../components/Header"

const AddBook = () => {
    return (
        <>
        <Header/>
        <main className="bg-success text-white" style={{height: "650px"}}>
            <section className="container">
              <AddBookForm/>
            </section>
        </main>
        <Footer/>
        </>
    )
}

export default AddBook;