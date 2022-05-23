import axios from "axios";
import React, { useEffect, useState } from "react";

import Button from "./components/Button";

import CandidateCard from "./components/CandidateCard";

import "./styles.css";

export default function App() {

  const [loading, setLoding] = useState(true);

  const [data, setData] = useState([]);

  console.log("data : ", data);

  const [page, setPage] = useState(1);

  console.log("page :", page)

  const [sort, setSort] = useState("asc");





  useEffect(() => {


    getData(page);



  }, [page])







  const getData = async (page) => {

    setLoding(true);

    axios({

      method: "get",
      url: "https://json-server-mocker-masai.herokuapp.com/candidates",
      params: {
        _page: page,
        _limit: 5,

      }


    }).then(res => {

      setData(res.data);
      setLoding(false);
    }).catch(err => {
      console.log("Data : ", err);
      setLoding((false))
    })




  }







  return (
    <div className="App">
      <div>
        {loading && <div id="loading-container">...Loading</div>}
        <Button id="SORT_BUTTON" title={`Sort by Ascending Salary`} />
        <Button title="PREV" id="PREV" />
        <Button id="NEXT" title="NEXT" />
      </div>
      {data.map((item) =>

        <CandidateCard key={item.id}  {...item} />


      )}
    </div>
  );
}
