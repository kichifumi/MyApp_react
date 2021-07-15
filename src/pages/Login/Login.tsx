import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { Link, Redirect } from 'react-router-dom';

const Login = (props: any) => {
  const [loginId, setLoginId] = useState('kichifumi@gmail.com');
  const [password, setPassword] = useState('kichi0707');
  console.log(props);
  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyC2QNiaS9NoDNFrBcMd6u-7OmAqV-zupF4',
      authDomain: 'myapp-e189e.firebaseapp.com',
      projectId: 'myapp-e189e',
      storageBucket: 'myapp-e189e.appspot.com',
      messagingSenderId: '92315278834',
      appId: '1:92315278834:web:273f2ddeb4180c1a371f6b',
      measurementId: 'G-VRQEH9KHGH',
    };
    firebase.initializeApp(firebaseConfig);
  }, []);

  const handleClick = () => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(loginId, password)
          .then((res) => {
            props.history.push('/Home');
          })
          .catch((error) => console.log(error));
      });
  };

  return (
    <div className="Login">
      <h1>ログイン</h1>
      <div className="formInput">
        <div className="formInput">
          ログインID
          <input
            name="loginId"
            type="text"
            placeholder="ログインID"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
          />
        </div>
        <div className="formInput">
          パスワード
          <input
            name="password"
            type="text"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>ログイン</button>
      </div>
    </div>
  );
};
export default Login;
