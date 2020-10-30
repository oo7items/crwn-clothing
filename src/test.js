import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

/** 查询特定文档 */
firestore.collection('users').doc('ZHcsPN39gYJUdBKbrtly').collection('cartItems').doc('vgNu1x64AmWXCZfFmrIG')
/** 收集特定文档 */
firestore.doc('/users/ZHcsPN39gYJUdBKbrtly/cartItems/vgNu1x64AmWXCZfFmrIG');
/** 收集特定集合 */
firestore.collection('/users/ZHcsPN39gYJUdBKbrtly/cartItems')