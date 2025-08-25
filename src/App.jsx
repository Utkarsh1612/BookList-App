import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return <>
  <Header/>
  <main className="">
    <section className="bg-success py-5">
      <div className="text-center text-white py-5">
          <h2 className="display-3">All Books</h2>
          <button className="btn btn-light">View Books</button>
      </div>
    </section>
    <section className="py-5">
      <div className="text-center py-5">
          <h2 className="display-3">Add Books</h2>
          <button className="btn btn-success">View Books</button>
      </div>
    </section>
  </main>
  <Footer/>
  </>
  
};

export default App;