import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  style
}){
  return(
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} style={style}/>
        </div>
        <div className="col-6 mt-5 p-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
          <a href={tryDemo}>Try demo {" "}<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <a href={learnMore} style={{ marginLeft: "50px" }}>Learn More{" "}<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" /></a>
            <a href={appStore}><img  src="media/images/appstoreBadge.svg" style={{marginLeft:"50px"}} /></a>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default LeftSection;