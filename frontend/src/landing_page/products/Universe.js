import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>The MarketUp Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
        <div className="col-4 mt-5 p-3 text-muted">
          <img src="media/images/smallcaselogo.png"/>
          <p>Thematic investment platform</p>
        </div>
        <div className="col-4 mt-5 p-3 text-muted" >
          <img src="media/images/streaklogo.png" style={{width:"52%"}}/>
          <p className="mt-1">Thematic investment platform</p>
        </div>
        <div className="col-4 mt-5 p-3 text-muted">
          <img src="media/images/sensibullLogo.svg"style={{width:"50%"}}/>
          <p className="mt-4">Thematic investment platform</p>
        </div>
        <div className="col-4 mt-5 p-3 text-muted">
          <img src="media/images/zerodhaFundhouse.png"style={{width:"55%"}}/>
          <p>Thematic investment platform</p>
        </div>
        <div className="col-4 mt-5 p-3 text-muted">
          <img src="media/images/goldenpiLogo.png"style={{width:"50%"}}/>
          <p>Thematic investment platform</p>
        </div>
        <div className="col-4 mt-5 p-3 text-muted">
          <img src="media/images/dittoLogo.png"style={{width:"35%"}}/>
          <p>Thematic investment platform</p>
        </div>
        <button className="fs-5 p-2 mb-5 btn btn-primary" style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
      </div>

    </div>
  );
}

export default Universe;