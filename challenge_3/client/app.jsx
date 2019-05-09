import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'main',
    }
    this.handleAddressPage = this.handleAddressPage.bind(this);
    this.handlePaymentPage = this.handlePaymentPage.bind(this);
  }

  handleAddressPage() {
    this.setState({
      page: 'address'
    })
  }
  handlePaymentPage() {
    this.setState({
      page: 'payment'
    })
  }

  render() {
    const page = this.state.page;
    let renderingPage;

    if (page === 'main') {
      renderingPage = <Users nextPage={this.handleAddressPage}/>;
    } else if (page === 'address') {
      renderingPage = <Address nextPage={this.handlePaymentPage}/>;
    } else if (page === 'payment') {
      renderingPage = <Payment/>
    }

    return (
      <div>
        <div>Multistep Checkout Experience</div>
        {renderingPage}
      </div>
    );
  }
}
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.userSubmit = this.userSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  userSubmit(e) {
    e.preventDefault();
    fetch('../account', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    if(e.target.name === 'email') {
      this.props.handleEmail(e.target.value);
    }
  }

  render() {
    return (
      <div>
        <form id="user" onSubmit={this.userSubmit} >
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            E-mail:
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            Password:
            <input type="text" name="password" onChange={this.handleChange} />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
          <button onClick={this.props.nextPage}> Next step </button>
        </form>
      </div>
    );
  }
}

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.addressSubmit = this.addressSubmit.bind(this)
    this.state = {
      line1: '',
      line2: '',
      city: '',
      state : '',
      zipcode: '',
      phone: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  addressSubmit(e) {
    console.log('hello')
    e.preventDefault();
    fetch('../address', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form id="user" onSubmit={this.addressSubmit} >
          <label>
            line1:
            <input type="text" name="line1" onChange={this.handleChange}/>
          </label>
          <br></br>
          <label>
            line2:
            <input type="text" name="line2" onChange={this.handleChange}/>
          </label>
          <br></br>
          <label>
            City:
            <input type="text" name="city" onChange={this.handleChange}/>
          </label>
          <br></br>
          <label>
            State:
            <input type="text" name="state" onChange={this.handleChange}/>
          </label>
          <br></br>
          <label>
            Zipcode:
            <input type="text" name="zipcode" onChange={this.handleChange}/>
          </label>
          <br></br>
          <input type="submit" value="Submit" />
          <button onClick={this.props.nextPage}> Next step </button>
        </form>
      </div>
    );
  }
}

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      expDate:'',
      cvv: '',
      billingZip: ''
    }
    this.paymentSubmit = this.paymentSubmit.bind(this);
  }
  paymentSubmit(e) {
    console.log('bye')
    e.preventDefault();
    // var obj = this.state;
    // obj[email] = this.props.email;
    fetch('../address', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form id="payment" onSubmit={this.paymentSubmit} >
          <label>
            Card Number:
            <input type="text" name="cardNumber" onChange={this.handleChange}/>
          </label>
          <br></br>
          <label>
            Expirate Date:
            <input type="text" name="expDate" onChange={this.handleChange}/>
          </label>
          <br></br>
          <label>
            CVV:
            <input type="text" name="cvv" onChange={this.handleChange}/>
          </label>
          <br></br>
          <label>
            Billing Zipcode:
            <input type="text" name="billingZip" onChange={this.handleChange}/>
          </label>
          <br></br>
          <button> Go to Homepage </button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app')); 