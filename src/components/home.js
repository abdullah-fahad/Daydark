import React from 'react'
import Background from '../videos/background.mp4'
function Home() {
    return(
        <div>
            <video 
            autoPlay 
            loop
            muted
            style={{
                position: "absolute",
                width: "100%",
                left: "0%",
                top: "0%",
                height: "100%",
                objectFit: "cover",
                transfom: "translate( -50%, -50%)",
                zIndex: "-1",
            }}
            >
                <source src={Background} type="video/mp4" />
            </video>
            <div className='p-2 welcoming align-self-center'>
                <div className='row'>
                    <div className='col-6'>
                        <h1>Welcome to Daydark official website.</h1>
                        <p>Where amazing things happen~</p>
                        <div className='btn-group rounded'>
                            <button className='btn btn-outline-success'>Our news</button>
                        </div>
                    </div>
                    <div className='col-6'>
                        <h1>Join us now!</h1>
                        <form>
  <div class="input-group">
    <span class="input-group-text"><img src="https://img.icons8.com/ios-filled/15
    /000000/username.png"/></span>
    <input type="text" className="form-control" placeholder="Username" />
  </div>
  <div class="input-group">
    <span class="input-group-text"><img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/15/000000/external-email-interface-kiranshastry-solid-kiranshastry.png"/></span>
    <input type="text" className="form-control" placeholder="Email" />
  </div>
  <div class="input-group">
    <span class="input-group-text"><img src="https://img.icons8.com/ios-glyphs/15/000000/lock--v1.png"/></span>
    <input type="text" className="form-control" placeholder="Password" />
  </div>
  <br />
    <button className='btn btn-primary' type="button">Submit</button>
    <a href="#" className='link'><strong>I have an account, let me in!</strong></a>
  
</form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;