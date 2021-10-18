import React, { Component } from 'react';

// let name = ''
// let text = ''

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', // pertama kali, ini yang dijalankan
      text: ''
    }
  }
  
  handleSubmit (event) {
    event.preventDefault()
    console.log('ini submit')
    // const email = document.getElementById('input-email')?.value
    // const text = document.getElementById('input-text')?.value
    // console.log(email, '<<< ini email')
    // console.log(text, '<<< ini text')
    console.log(this.state)
  }

  componentDidMount() {
    // ini dijalankan setelah selesai merender yang pertama kali
    setTimeout(() => {
      this.setState({
        name: 'litha@mail.com',
        text: 'example text area'
      })
      console.log("Component Form Sudah di Mounting !")
    }, 2000) // terjadinya warning karena ini. sebelum set time out nya selesai, kita sudah unmounting duluan
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, '<<< prev props')
    // console.log(prevState, '<<< prev state')
  }

  componentWillUnmount() {
    // ini dijalankan setelah componentnya gak dipakai lagi
    console.log("Component Form sudah selesai / berhenti di mounting !")
  }

  render() { 
    return (
      <div className="container">
        <form action="" onSubmit={(event) => this.handleSubmit(event)}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" id="input-email" placeholder="name@example.com"
              value={this.state.name}
              // onChange={(event) => console.log(event.target?.value)}
              onChange={event => this.setState({ name : event.target?.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Example textarea</label>
            <textarea className="form-control" id="input-text" rows="3" 
              // onChange={(event) => console.log(event.target?.value)}
              onChange={event => this.setState({ text: event.target?.value })}
              value={this.state.text}
            >
            </textarea>
          </div>
          <div className="mb-3">
            <button className="btn btn-success" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
 
export default Form;