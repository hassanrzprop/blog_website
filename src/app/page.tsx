import Image from 'next/image'
import Link from 'next/link'
import Navbar from './(components)/navbar/page'

export default function Home() {
  return (
    
    <main>
      <div>
      <div className="hero_area">
    {/* <!-- header section strats --> */}
   <Navbar/>
    {/* <!-- end header section --> */}
    {/* <!-- slider section --> */}
    <section className=" slider_section position-relative">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <div>
                      <h1>
                        Welcome To <br/>
                        <span>
                          Content Writing Services
                        </span>
                      </h1>
                      <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking
                      </p>
                      <div className="btn-box">
                        <Link href="blog" className="btn-1">
                          OUR BLOGS
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <div>
                      <h1>
                        Welcome To <br/>
                        <span>
                          Content Writing Services
                        </span>
                      </h1>
                      <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking
                      </p>
                      <div className="btn-box">
                        <a href="blog" className="btn-1">
                          OUR BLOGS
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    {/* <!-- end slider section --> */}
  </div>

  {/* <!-- about section --> */}

 
      </div>
    </main>
  )
}
