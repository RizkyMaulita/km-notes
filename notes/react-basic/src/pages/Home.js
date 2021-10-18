import React, { Fragment, Component } from 'react'
import Navbar from '../component/Navbar';
import Jumbotron from '../component/Jumbotron';
import Card from '../component/Card'

// export default function Home () {
//   // isi untuk script logic js
  
//   return (
//     <Fragment>
//       <Navbar />
//       <Jumbotron />
//       <Card />
//     </Fragment>
//   )
// }

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isHideNavbar: false
    }
  }

  onChangeHideNavbar() {
    this.setState({
      isHideNavbar: !this.state.isHideNavbar
    })
  }

  render() {
    return (
      <Fragment>
        <div className="mt-3 d-flex justify-content-center">
          <button className="btn btn-success" onClick={() => this.onChangeHideNavbar()}>
            {
              this.state.isHideNavbar
              ? "Show Navbar"
              : "Hide Navbar"
            }
          </button>
        </div>
        {
          this.state.isHideNavbar
          ? null
          : <Navbar />
        }
        <Jumbotron />
        <Card />
      </Fragment>
    )
  }
}