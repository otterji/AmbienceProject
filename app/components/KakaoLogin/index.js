import KakaoLogin from 'react-kakao-login';
import React from 'react';

const Login = props => {
  const { onLoginKakao } = props;
  return (
    <div>
      <KakaoLogin
        jsKey="41607a605eebc73eae5d2c36b9c759c7"
        onSuccess={result => onLoginKakao(result)}
        onFailure={result => console.log(result)}
        render={props => <div onClick={props.onClick} />}
        getProfile
      />
    </div>
  );
};

export default Login;
