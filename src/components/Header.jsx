import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-body-tertiary">
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand" >
            BookList App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/allbooks"} className="nav-link active" aria-current="page" >
                  All Books
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/addbook"} className="nav-link active" >
                  Add Books
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

