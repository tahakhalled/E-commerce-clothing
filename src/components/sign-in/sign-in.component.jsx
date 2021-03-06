import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
        }
    }
    handelSubmit = event => {
        event.preventDefault();

        this.setState({email : '' , password: ''})
    }
    handelChange = event => {
        const { value , name} = event.target;

        this.setState ({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I Already Have An Account</h2>
                <span>Sign In With Your Email and Password</span>
                <form onSubmit ={this.handelSubmit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    handelChange={this.handelChange} 
                    label="Email"
                    required />
                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    handelChange={this.handelChange}
                    label="Password" 
                    required/>
                    <div className='buttons'>
                    <CustomButton type="submit" children="Sign In"/>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                        Sign In with google
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;