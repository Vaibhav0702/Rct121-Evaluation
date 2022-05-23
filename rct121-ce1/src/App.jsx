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

  const [salarysort, setSalarySort] = useState("desc");

  console.log("salary : ", salarysort);



  useEffect(() => {


    getData(page, salarysort);



  }, [page, salarysort])







  const getData = async (page, salarysort) => {

    setLoding(true);

    axios({

      method: "get",
      url: "https://json-server-mocker-masai.herokuapp.com/candidates",
      params: {
        _page: page,
        _limit: 5,
        _sort: "salary",
        _order: `${salarysort}`,

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


        {

          salarysort === "desc" ? <>

            <Button id="SORT_BUTTON" title={`Sort by Ascending Salary`} onClick={() => setSalarySort("asc")} />


          </> :

            <>

              <Button id="SORT_BUTTON" title={`Sort by Descending Salary`} onClick={() => setSalarySort("desc")} />

            </>

        }








        <Button title="PREV" id="PREV" disabled={page === 1} onClick={() => setPage(page - 1)} />

        <Button id="NEXT" title="NEXT" onClick={() => setPage(page + 1)} />

      </div>
      {data.map((item) =>

        <CandidateCard key={item.id}  {...item} />


      )}
    </div>
  );
}
