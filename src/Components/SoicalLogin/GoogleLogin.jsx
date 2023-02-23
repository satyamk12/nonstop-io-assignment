import React from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/main');
  }
  

  
  return (
    <>
    <LoginSocialGoogle
    client_id={
        "236417101994-ht9j09uffbp8pbgk8oqbaijmbg7jbk2e.apps.googleusercontent.com"
    }
    scope="openid profile email"
    discoveryDocs="claims_supported"
    access_type="offline"
    onResolve={({provider , data}) => {
        console.log(provider , data);
    }}
    onReject = {(err) => {
        console.log(err);
    }}
    >
    <GoogleLoginButton onClick={handleClick} />
    </LoginSocialGoogle>
    </>
  )
}

export default GoogleLogin;