import React from 'react';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { useNavigate } from 'react-router-dom';

const FacebookLogin = () => {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/main');
  }
  
  return (
    <>
    <LoginSocialFacebook
    appId="3300273783568761"
    onResolve={(response) => {
        console.log(response);
    }}
    onReject={(error) =>{
        console.log(error);
    }}
    >
        <FacebookLoginButton onClick={handleClick} />
    </LoginSocialFacebook>
    </>
  )
}

export default FacebookLogin;