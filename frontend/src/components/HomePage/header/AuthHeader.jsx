import React, { useState, style } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
// import Avatar from "@mui/material/Avatar";
import { useHistory } from "react-router-dom";
import InboxIcon from "@material-ui/icons/Inbox";
import HelpIcon from "@material-ui/icons/Help";
import { Link } from "react-router-dom";
import { auth, provider } from "../../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../../feature/userSlice";
import mylogo from "../../../img/logo.jpeg";
import { signInWithPopup } from "firebase/auth";
//import Button from "../../UI/Button";

function AuthHeader() {
  const user = useSelector(selectUser);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const SignOut = () => {
    auth.signOut();
    history.push("/auth");
  };
  const Register = () => {
    history.push("/register");
  };
  const handleGoogleSignIN = () => {
    setLoading(true);

    signInWithPopup(auth, provider)
      .then((res) => {
        setLoading(false);

        history.push("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: name ? stringToColor(name) : "rgba(255,255,255,0.8)",
      },
      children: name && `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a><img src={mylogo} alt="" style={{width:"150px"}}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item" >
          <Link className="nav-link mx-3" to="/home" >HOME</Link>
        </li>
        <li class="nav-item" >
          <Link class="nav-link mx-3" to="/ourhome" >BLOGS</Link>
        </li>
        <li class="nav-item" >
          <Link class="nav-link mx-3" to="/ask" >ASK</Link>
        </li>
        <li class="nav-item" >
          <Link class="nav-link mx-3" to="/docs" >DOCUMENTS</Link>
        </li>
        <li class="nav-item" >
          <Link class="nav-link mx-3" to="/hostel" >HOSTELS</Link>
        </li>
        <li class="nav-item" >
          <Link class="nav-link mx-3" to="/food" >FOOD</Link>
        </li>
        <li class="nav-item" >
          <Link class="nav-link mx-3" to="/about" >ABOUT</Link>
        </li>
        <li class="nav-item" >
          <Link class="nav-link mx-3 text-danger"  onClick={handleGoogleSignIN} >{loading ? "LOGIN" : "LOGIN"}</Link>
        </li>
        <li class="nav-item" >
          <Link class="nav-link mx-3 text-danger"  onClick={Register} >REGISTER</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default AuthHeader;
