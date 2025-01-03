import React from 'react'

const Winners = () => {
  return (

  <div className="container">
    <div className="tb-10" style={{ textAlign: "center" }}>
      <h1 className="gdash3" style={{ fontSize: 22 }}>
        {" "}
        Top Winner List
      </h1>
      <span style={{ fontSize: 12 }}>
        List of Today's top winners with amount
      </span>
      <div className="row game-list-inner">
        <div className="col-12 game-rates">
          <h2 style={{ fontSize: 16, color: "var(--primary-light)" }}>
            PAR*S TA***N
          </h2>
          <p>
            Amount : <span>90000</span>
          </p>
          <p>
            Game : <span>KALYAN MORNING CLOSE</span>
          </p>
          <p>
            Digit : <span>8</span>
          </p>
          <p>
            Time : <span>2024-01-26 12:10:18 PM</span>
          </p>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Winners