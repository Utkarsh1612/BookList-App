import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return <>
  <Header/>
  <main className="">
    <section className="bg-success py-5">
      <div className="text-center text-white py-5">
          <h2 className="display-3">All Books</h2>
          <Link to={"/allbooks"} className="btn btn-light">View Books</Link>
      </div>
    </section>
    <section className="py-5">
      <div className="text-center py-5">
          <h2 className="display-3">Add Books</h2>
          <Link to={"/addbook"} className="btn btn-success">Add Books</Link>
      </div>
    </section>
  </main>
  <Footer/>
  </>
  
};

export default App;