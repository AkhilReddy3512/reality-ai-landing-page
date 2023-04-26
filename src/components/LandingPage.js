import React from 'react'
import { Link } from 'react-router-dom';

function LandingPage() {

  return (
    <>
      <nav className="navbar navbar-light bg-light">
      <h1 className="text1 text3"><b>RealtyAi</b></h1>
      </nav>
      <div className="App2">
        <p style={{paddingTop:"9vw"}} className="text">RealtyAi</p>
      </div>
      <div>
        <div class="container">
          <div className="row">
            <div className="col col-xs-6 col-md-4 col-xl-3">
              <div className="card" style={{width:"90%", margin:"1rem"}}>
                <img style={{padding:"1vw", borderRadius:"5%"}} src="https://images.ctfassets.net/wdjnw2prxlw8/6HRSjw4NJnvoQEKuDF9BsM/25bd19e9dfbfa9be0137096f74c454fa/glass_buildings_view_from_street_to_sky.jpg" className="card-img-top" alt="project" />
                <div className="card-body">
                  <h6 className="card-title">Project1</h6>
                  <p className="card-text">RealtyAi</p>
                  <Link className="btn btn-outline-info center" to="https://otp-login-b8ec1.firebaseapp.com/" role="button" target='_blank'>Compare Now</Link>
                </div>
              </div>
            </div>

          </div></div>
      </div>
    </>
  )
}

export default LandingPage