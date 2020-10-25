import React from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

/** 谷歌监听身份验证 */
import { auth } from './firebase/firebase.untils';





class App extends React.Component {
  constructor() {
    super();

    this.state = {
      /** 当前用户 */
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    /** 关闭库开关 */
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
