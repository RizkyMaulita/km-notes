import React, { Component } from 'react';
import '../App.css';
import Form from '../components/Form';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowForm: true
    }
  }

  handleShowForm () {
    const prevStatusShow = this.state.isShowForm
    this.setState({
      isShowForm: !prevStatusShow
    })
  }

  render () {
    return (
      <div className="app container">
        <div className="d-flex justify-content-center my-5">
          <button className="btn btn-success" onClick={() => this.handleShowForm()}>
            {
              this.state?.isShowForm
              ? "Hide Form"
              : "Show Form"
            }
          </button>
        </div>
        {
          this.state?.isShowForm
          ? <Form />
          : null
        }
        {/* {this.state?.isShowForm && <Form />} */}
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
      
//       <Form />
//     </div>
//   );
// }

export default App;
