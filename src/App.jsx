import axios from "axios";
import react, { useEffect, useState } from "react";
import icon from "./assets/icon.png";

function App() {
  const URLkey = "0e736ef75894202417f6b5f755e0545a";
  const [data, setData] = useState({});
  const [city, setCity] = useState("");

  const fun = (cityName) => {
    const apiURL = `https://api.github.com/users/${cityName}`;
    if (!city) return;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const onChangeData = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  };

  const setDataFun = () => {
    fun(city);
  };
  // useEffect(() => {
  //   fun("peshawar");
  // }, []);

  return (
    <div>
      <div className="bg ">
        <div className="heading">
          <h1>Search GitHub username here</h1>
          <div className=" col-md-8 d-grid gap-3">
            <input
              type="text"
              className="form-control"
              placeholder="search city temperature"
              onChange={onChangeData}
              value={city}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={setDataFun}
            >
              search
            </button>
          </div>
        </div>
      </div>
      <div className="result">
        <div className="img">
          <img src={data?.avatar_url} alt="" />
        </div>

        <h1>Username {data?.name}</h1>
        <h2> from {data?.location}</h2>
        <h2>followers {data?.followers}</h2>
        <h2>followings {data?.following}</h2>
      </div>
    </div>
  );
}

export default App;
