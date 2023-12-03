import Link from "next/link"
export default function Navbar(){
    return(
         <main>
            <div>
            <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
          <a className="navbar-brand mr-5" href="/">
            <img src="images/logo.png" alt=""/>
            <span>
              BLOGIFY
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <Link className="nav-link" href="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="blog"> Blog </Link>
                </li>
                
              </ul>
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
            </div>
         </main>
    )
}