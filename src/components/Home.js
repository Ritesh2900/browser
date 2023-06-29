import React, { useState } from "react";
import myStyle from "./css/Home.module.css";
import menu from "./img/menu.png";
import profile from "./img/profile.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { allActions } from "../state";
import { bindActionCreators } from "redux";

export default function Home() {
  const [display, setDisplay] = useState(false);
  const [value, setValue] = useState("");

  // code for using redux for setting the serah input data
  const dispatch = useDispatch();
  const { setSearchData } = bindActionCreators(allActions, dispatch);

  const navigate = useNavigate();
  // code for function for toogle them
  const toogleIcon = () => {
    setDisplay(!display);
  };
  // function for handel enter submit
  const handelKeyPress = (e) => {
    if (e.keyCode === 13) {
      console.log("You Press Enter");
      setSearchData(value)
      navigate("/search");
    }
  };

  return (
    <>
      {/* CODE FOR HEADER SECTION */}
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 offset-xl-9 col-lg-9 offset-md-7 offset-sm-5 offset-5 d-flex justify-content-end">
            <span className={myStyle.gmailImg}>Gmail</span>&nbsp; &nbsp;&nbsp;
            <span className={myStyle.gmailImg}>Images</span>
          </div>
          <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3 d-flex justify-content-center">
            <img
              src={menu}
              alt="menu"
              className={myStyle.menuDot}
              onClick={toogleIcon}
            />
            <img src={profile} alt="profile" className={myStyle.profile} />
          </div>
        </div>
      </div>

      {/* CODE FOR MAIN CONTAINER OF UI */}
      <div className={`container ${myStyle.mainContainerOfContent}`}>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <h1 className={myStyle.googleText}>Google</h1>
          </div>
          <div className="col-12 d-flex justify-content-center mt-4">
            <div className={myStyle.mainDivOfSerachIcon}>
              <i
                className={`fa-solid fa-magnifying-glass ${myStyle.glass}`}
              ></i>
              <input
                type="text"
                name="search"
                id="search"
                value={value}
                className={myStyle.searchInput}
                placeholder="Search Google or type a URL"
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                onKeyUp={handelKeyPress}
                autoComplete="off"
              />
              <i className={`fa-solid fa-microphone ${myStyle.microphone}`}></i>
            </div>
          </div>

          {/* code for two btns */}
          <div className="col-12 d-flex justify-content-center mt-xl-5 mt-md-4 mt-sm-3 mt-3">
            <button type="button" className={myStyle.twoBtnOfHomePage}>
              Google Search
            </button>
            <button type="button" className={myStyle.twoBtnOfHomePage}>
              I'm Feeling Lucky
            </button>
          </div>

          {/* code for gogole offered in  */}
          <div className="col-12 d-flex justify-content-center mt-4">
            <p className={myStyle.googleOfferedStyle}>
              Google offered in :{" "}
              <span className={myStyle.languageStyle}>Hindi</span>
              <span className={myStyle.languageStyle}>English</span>
              <span className={myStyle.languageStyle}>Marathi</span>
              <span className={myStyle.languageStyle}>Punjabi</span>
              <span className={myStyle.languageStyle}>Gujarati</span>
            </p>
          </div>
        </div>
      </div>
      {/* code for showing all the apps */}

      {display ? (
        <div className="container-fluid">
          <div className="row">
            <div
              className={`col-xl-3 col-lg-3 col-md-6 col-sm-10 col-10 ${myStyle.allAppOptionsStyle}`}
            >
              <div className="row">
                <div className="col-3 d-flex justify-content-center">
                  <i
                    className={`fa-brands fa-google-drive ${myStyle.appIconStyle}`}
                    style={{ color: "#0959e1" }}
                  ></i>
                </div>

                <div className="col-3 d-flex justify-content-center">
                  <i
                    className={`fa-brands fa-google-drive ${myStyle.appIconStyle}`}
                    style={{ color: "#0959e1" }}
                  ></i>
                </div>

                <div className="col-3 d-flex justify-content-center">
                  <i
                    className={`fa-brands fa-google-drive ${myStyle.appIconStyle}`}
                    style={{ color: "#0959e1" }}
                  ></i>
                </div>

                <div className="col-3 d-flex justify-content-center">
                  <i
                    className={`fa-brands fa-google-drive ${myStyle.appIconStyle}`}
                    style={{ color: "#0959e1" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <footer>
        <i className="fa-solid fa-pen" style={{ color: "white" }}></i>
      </footer>
    </>
  );
}
