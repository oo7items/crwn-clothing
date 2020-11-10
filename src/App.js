import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

/** 谷歌监听身份验证  创建用户资料文档 */
import { auth, createUserProfileDocument } from './firebase/firebase.untils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';

import CheckPage from './pages/checkout/chekout.component';


class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     /** 当前用户 */
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    /** 关闭库 */
    // auth.onAuthStateChanged(user => {
    //   this.setState({ currentUser: user });
    //   console.log(user);
    // })
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => { /** 验证状态已更改 */
    //   createUserProfileDocument(user); /** 调用创建的用户资料文档，并初始化应用程序，此时没有登录情况，但是数据库存放唯一登录的账户 */
    //   console.log(user);
    // });

    const {setCurrentUser} = this.props;
    // 将数据库数据存放到应用程序中
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { /** 验证状态已更改 */
      if(userAuth) { // 检查是否有用户登录 如果有文档，我们将只需要回过头给用户
        const userRef = await createUserProfileDocument(userAuth); /** 创建用户资料文档 */
        // 倾听该用户的引用，以获取对该数据的任何更改
        userRef.onSnapshot(snapShot => { // 获取该数据的第一个状态 使用该数据来设置状态
          // console.log(snapShot.data());
          
          // this.setState({
            // currentUser: {
            //   id: snapShot.id,
            //   ...snapShot.data()
            // }, () => {
          //   console.log(this.state); 
          // });
        // }
        // 从数据库中获取的数据和ID
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            }); 
        });
      }
      /** 取消订阅 */
      // this.setState({ currentUser: userAuth }); 
      setCurrentUser(userAuth); // 从关闭库中获取的null
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); /** 取消订阅 */
  }
  
  render() {
    return (
      <div>
      <Header />
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => 
            this.props.currentUser ? 
            (<Redirect to='/' />)
             : (<SignInAndSignUpPage />)} 
            />
          <Route exact path='/checkout' component={CheckPage} />
          </Switch>
          </div>
          );
        }
      }

// 调用用户当前状态
// 配合使用<Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
// 如果有用户将不再显示登录页面！！！！！
// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser // 对象的
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

// 用户发生登录时的状态
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) // 传递user用户数据 这里返回的是一个对象user
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


// <Header currentUser={this.state.currentUser} />

// <Route path='/signin' component={SignInAndSignUpPage} />
