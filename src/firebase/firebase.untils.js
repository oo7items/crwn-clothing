import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBc088Z-jubFEc24EzyNo_DbzuDbmKIu3c",
    authDomain: "crwn-db-1d551.firebaseapp.com",
    databaseURL: "https://crwn-db-1d551.firebaseio.com",
    projectId: "crwn-db-1d551",
    storageBucket: "crwn-db-1d551.appspot.com",
    messagingSenderId: "276605001526",
    appId: "1:276605001526:web:acab6f56906e12001c9d97",
    measurementId: "G-YXLJCLB2Z7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => { /** 用户认证 附加数据 */
    if (!userAuth) return; // 如果没有用户 !null = true 直接返回空
    // console.log(firestore.doc('users/128fdsgadty'));
    /** 用户参考 */
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    /** 确定那里是否有数据 */
    const snapShot = await userRef.get();

    // console.log(snapShot.data());
    if(!snapShot.exists) { /** 如果文档不存在 */
        const { displayName, email } = userAuth;
        const createAt = new Date(); // 获取用户时间

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', console.error.message);
        }
    }

    return userRef; // 让用户引用我们创建的数据
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


/** 谷歌验证 */
export const provider = new firebase.auth.GoogleAuthProvider();
/** Google身份验证时始终触发Google弹出窗口 */
provider.setCustomParameters({prompt: 'select_account' });
export const signInwithGoogle = () => auth.signInWithPopup(provider);





