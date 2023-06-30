import React, { useState, useEffect } from "react";
import "./css/Trial.css";
export default function Trial() {
  const [val, setVal] = useState("");
  const [suggesstion, setSuggesstion] = useState([]);
  const [action, setAction] = useState(false);

  useEffect(() => {
    const firstTimeSearch = async () => {
      let apiKey = `https://suggestqueries.google.com/complete/search?client=chrome&q=${val}&hl=en`;
      let fetchData = await fetch(apiKey);
      let convertData = await fetchData.json();
      setSuggesstion(convertData);
      setAction(true);
    };
    firstTimeSearch();
  }, [val]);

  const setOptionVal = (data) => {
    setVal(data)
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Here"
              value={val}
              onChange={(e) => {
                setVal(e.target.value);
              }}
              style={{ width: "100%" }}
            />

            {/* code for suggesstion */}
            <div className="suggestionDiv">
              {action
                ? suggesstion[1].map((ele) => {
                    return (
                      <p
                        className="suggestOption"
                        onClick={() => setOptionVal(ele)}
                      >
                        {ele}
                      </p>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
