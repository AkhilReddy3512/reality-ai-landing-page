import React from 'react'
import { Link } from 'react-router-dom';

function LandingPage() {

  return (
    <>
      <nav className="navbar navbar-light bg-light">
      <h1 className="text1 text3"><b>RealtyAi</b></h1>
      </nav>
      <div className="App2">
        <br /><br />
        <p className="text">RealtyAi</p>
        <br /><br />
      </div>
      <div>
        <div>
          <div className="row">
            <div className="col">
              <div className="card" style={{ width: "20%", marginTop: "2%", marginLeft: "2%" }}>
                <img src="https://images.ctfassets.net/wdjnw2prxlw8/6HRSjw4NJnvoQEKuDF9BsM/25bd19e9dfbfa9be0137096f74c454fa/glass_buildings_view_from_street_to_sky.jpg" className="card-img-top" alt="project" />
                <div className="card-body">
                  <h6 className="card-title">Project1</h6>
                  <p className="card-text">RealtyAi</p>
                  <Link className="my-button" to="http://localhost:3001/" role="button" target='_blank'>Compare Now</Link>
                </div>
              </div>
            </div>

          </div></div>
      </div>
    </>
  )
}

export default LandingPage