import React, { useState, useEffect } from "react";
import SearchStyle from "./css/Search.module.css";
import google from './img/google.png'
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from "react-redux";
import LoadingBar from "react-top-loading-bar";
export default function Search() {
  const searchFData = useSelector((state) => state.mySearchData);
  const [searchInput, setSearchInput] = useState(searchFData);
  const [option, setOption] = useState(searchInput);
  const [dataFetchByApi, setDataFetchByAPi] = useState(false);
  const [progress, setProgress] = useState(0);
  // usestate for accessing result of data of api
  const [getDataAPI, setDataAPI] = useState([]);
  // code for api handling

  useEffect(() => {
    const firstTimeSearch = async () => {
      setProgress(10);
      let apiKey = `/api1/search.json?api_key=${process.env.REACT_APP_GOOGLE_API}&engine=google&q=${option}&location=Seattle-Tacoma,+WA,+Washington,+United+States&hl=en&gl=in&google_domain=google.com&num=30&start=10&safe=active`;
      setProgress(30);
      let fetchData = await fetch(apiKey);
      setProgress(60);
      let convertData = await fetchData.json();
      setProgress(90);
      setDataAPI(convertData);
      setProgress(100);
      setDataFetchByAPi(true);
    };
    firstTimeSearch();
  }, [option]);

  // function for handel enter submit
  const handelKeyPress = (e) => {
    if (e.keyCode === 13) {
      setOption(searchInput);
    }
  };

  return (
    <>
      {/* code for loading bar */}
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-0 col-0 d-flex justify-content-center">
            <h2 className={SearchStyle.mobileResp}>Google</h2>
          </div>

          <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
            <div className={SearchStyle.mainDivOfSerachIcon}>
              <i
                className={`fa-solid fa-magnifying-glass ${SearchStyle.magnifyingGlass}`}
              ></i>
              <input
                type="search"
                name="search"
                id="search"
                className={SearchStyle.input}
                placeholder="Search Google or type a URL"
                autoComplete="off"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
                onKeyUp={handelKeyPress}
              />

              {/* code for options*/}
            </div>
            {dataFetchByApi ? (
              <div className={`${SearchStyle.options} mt-4`}>
                {getDataAPI.search_information.menu_items.map((element) => {
                  return (
                    <a
                      key={element.position}
                      href={element.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <span className={SearchStyle.topOptions}>
                        {element.title}
                      </span>
                    </a>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {dataFetchByApi ? <hr /> : ""}
      {dataFetchByApi ? (
        <div className="container mb-5">
          <p className={`${SearchStyle.searchResult} mb-5`}>
            About {getDataAPI.search_information.total_results} results (
            {getDataAPI.search_information.time_taken_displayed}){" "}
          </p>
          {getDataAPI.organic_results.map((ele) => {
            return (
              <div
                className="row mx-xl-5 mx-lg-5 mx-md-2 mx-sm-0 mx-0 mt-3"
                key={uuidv4()}
              >
                <div className="col-xl-8 col-lg-8 co-md-10 col-sm-12 col-12">
                  <div style={{ display: "flex" }}>
                    <img
                      src={ele.favicon}
                      alt="icon"
                      className={SearchStyle.webIconStyle}
                    />
                    <div style={{ display: "grid" }}>
                      <span className={SearchStyle.labelHead}>
                        {ele.source}
                      </span>
                      <small
                        className={SearchStyle.labelHead}
                        style={{ fontSize: "11px" }}
                      >
                        {ele.displayed_link}{" "}
                        <i
                          className={`fa-solid fa-ellipsis-vertical ${SearchStyle.iconStyleThreeDots}`}
                          style={{ marginLeft: "30px", fontSize: "15px" }}
                        ></i>
                      </small>
                    </div>
                  </div>
                  <a href={ele.link} target="_blank" rel="noreferrer">
                    <strong
                      className="mt-3"
                      style={{ color: "rgb(138,180,248)" }}
                    >
                      {ele.title}
                    </strong>
                  </a>
                  <p style={{ fontWeight: "lighter" }}>{ele.snippet}</p>
                </div>
              </div>
            );
          })}

<div className="row mx-xl-5 mx-lg-5 mx-md-2 mx-sm-0 mx-0 mt-3">
  <div className="col-12">
    <img src={google} alt="logo" className={SearchStyle.googleLogo}/>
  </div>
</div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
