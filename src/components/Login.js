import React, {Component} from 'react' ;
import axios from 'axios';

export default class Login extends Component {

    state = {
        LoggedIn : false
    }


    //login click method
    clickLogin(){
        console.log('clicked')
        this.sendreq()
    }

    //sends login get request
    async sendreq() {
        const {data: response} = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response);
        this.setState((state) => {
            return {LoggedIn: true};
        });
    }

    //toggle Submit button
    displayForm() {
        if (this.state.LoggedIn === false) {
            return (
                <form className = 'form'>
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
                    <button type="submit" onClick = {this.clickLogIn} className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                            Forgot <a href="/">password?</a>
                    </p>
                </form>
            );
        }
        else{
            return 
        }
    }

    render() {
        return (


                <div>
                {this.displayForm()}
                </div>
        )
    }

    
}