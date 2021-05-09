import React, { Component, useEffect } from "react";
import axios from "axios";
import { lib } from "react-single-app";

export default function App(params) {
  useEffect(() => {
    featchData();
    featchDetail();
  }, []);

  async function featchData() {
    try {
      let res = await axios.get(
        "https://www.fastmock.site/mock/addc05c591df87aae5c93e8c2504aa52/step01/step01"
      );
      let data = await axios({
        method: "GET",
        url:
          "https://www.fastmock.site/mock/addc05c591df87aae5c93e8c2504aa52/step01/step02",
        params: {
          name: res.data.name,
        },
      });
      console.log(data.data.age);
    } catch (error) {
      console.log(error);
    }
  }

  async function featchDetail() {
    let res = await axios.get(
      "https://maria.yang800.com/api/data/v2/210",
    );

    console.log(res);
  }

  return <div>
    <input onChange={(e)=>console.log(e.target.value)}></input>
    <button>点击</button>
  </div>;
}
