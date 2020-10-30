import React from 'react';
import './sign-in.styles.scss';
import FromInput from '../from-input/from-input.component';
import CustomButton from '../custom-button/custom-button.component';

/** 谷歌登录验证方法 */
import {auth, signInwithGoogle} from '../../firebase/firebase.untils';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = event => {
        /** 从事件点目标中提取值和名称 */
        /** 存放着我们输入的邮箱和密码 */
        /** const value = event.target.value => 键入值 */
        /** const name = event.target.value => email and password */
        const {value, name } = event.target;
        
        /** [name]=>密码和邮箱 : value=> 我们键入的目标值 */
        /** 动态设置我们的状态，以便设置该名称 */
        /** [email]: this.state.value */
        /** [password]: this.state.password */
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I alredy hava an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FromInput name='email' type='email' handleChange={this.handleChange} value={this.state.email} label="email" required/>
                    <FromInput name='password' type='password'handleChange={this.handleChange} value={this.state.password} label="password" required/>

                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInwithGoogle} isGoogleSignIn> 
                            {' '}
                            Sign in with Google{' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;