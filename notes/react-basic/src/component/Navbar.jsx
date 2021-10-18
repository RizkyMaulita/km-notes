import React from 'react'

class Navbar extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      name: 'React Basic'
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'NAVBAR X REACT'
      })
    }, 5000)
  }

  componentWillUnmount() {
    console.log('Navbar sudah di Unmount')
  }

  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="http://www.google.com">{this.state.name}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="http://www.google.com">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://www.google.com">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="http://www.google.com">Disables</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Navbar