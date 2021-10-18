import React from 'react'

function Card () {
  return (
    <div className="container">
      <div className="card-group">
        <div className="card">
          <img className="card-img-top" src="https://i.pinimg.com/236x/ba/2e/ec/ba2eecbf6b9653e843a43fd4b8351012.jpg" alt="card-img"/>
          <div className="card-body">
            <h5 className="card-title" style={ styles } >Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="https://i.pinimg.com/236x/b9/6d/a3/b96da337709bcd416a916b93e2d75e7b.jpg" alt="card-img"/>
          <div className="card-body">
            <h5 className="card-title" id="card1" style={ funcStyles().card1 }>Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="https://i.pinimg.com/236x/25/85/89/258589555ed376190f23ce5ea0ca1ba2.jpg" alt="card-img"/>
          <div className="card-body">
            <h5 className="card-title" id="card2" style={ funcStyles().card2 }>Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = { 
  backgroundColor: 'aqua'
}

const funcStyles = () => {
  return {
    card1: {
      backgroundColor: 'red'
    },
    card2: {
      fontWeight: 'bold'
    }
  }
}

export default Card