import React from "react";
import "../style/login.css"
import imageLogo from "../image/chaezzic-logo 1.png"
import { useNavigate } from "react-router-dom";

const CLIENT_ID = "c51f6062b05e61f74f6e";
const redirectURL="http://localhost:3000"
const GITHUB_AUTH_SERVER = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirectURL}`;


function Login(){
  const navigate = useNavigate();

  const navigatetoHome=()=>{
    navigate("/");
  }

    return(
        <div className="Loginbody">
            <div className="Logobody">
                <nav className="LoginLogoMenuNav">
                  <div className="LoginLogo" onClick={navigatetoHome}>
                    <img src={imageLogo} alt="logoImg" />
                    <div className="LogintitleWrapper">채찍</div>
                  </div>
                  <div className="loginWrapper">로그인</div>
                </nav>
            </div>
            <div className="LoginTypoFrame">
              <div className="LoginTypo">
                <div className="LoginMainTypo">간편하게 가입하고<br/>채찍의 서비스 이용하기</div>
                <div className="LoginSloganTypo">채용 트렌드를 찍어주다, 채찍</div>
              </div>
              <button className="NavLoginButton" onClick={()=>window.open(GITHUB_AUTH_SERVER, "로그인 중...", "width=500, height=500, left=window.screenX + (window.outerWidth - width) / 2, top=window.screenY + (window.outerHeight - height) / 2")}>
                <div className="LoginButtonTypo">깃허브 계정으로 계속하기</div>
              </button>
            </div>
        </div>
    )
}

export default Login;