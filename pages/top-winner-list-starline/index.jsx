import React from 'react'

const Winners = () => {
  return (

<div className="container">
  <div className="tb-10" style={{ textAlign: "center" }}>
    <h1 className="gdash3" style={{ fontSize: 22 }}>
      {" "}
      Top Starline Winner List
    </h1>
    <span style={{ fontSize: 12 }}>
      List of Today's top winners with amount
    </span>
    <div className="row game-list-inner">
      <div className="col-12 game-rates">
        <h2 style={{ fontSize: 16, color: "var(--primary-light)" }}>
          K*atr** Ji**es*
        </h2>
        <p>
          Amount : <span>200000</span>
        </p>
        <p>
          Game : <span>12:15 PM</span>
        </p>
        <p>
          Digit : <span>0</span>
        </p>
        <p>
          Time : <span>2024-01-26 12:18:01 PM</span>
        </p>
      </div>
    </div>
  </div>
</div>


  )
}

export default Winners