import React from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

/** 谷歌监听身份验证  创建用户资料文档 */
import { auth, createUserProfileDocument } from './firebase/firebase.untils';





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
    /** 关闭库 */
    // auth.onAuthStateChanged(user => {
    //   this.setState({ currentUser: user });

    //   console.log(user);
    // })
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => { /** 验证状态已更改 */
    //   createUserProfileDocument(user); /** 创建用户资料文档 */
    //   console.log(user);
    // });
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { /** 验证状态已更改 */
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth); /** 创建用户资料文档 */

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
          
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state);
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); /** 取消订阅 */
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
