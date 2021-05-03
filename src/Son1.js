import React, {  useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import {ClassContext,CLASS_TYPE} from './Class'

export default function Son1(params) {
  useEffect(() => {
    featchUrl(1);
  }, []);

  const {dispatch} =useContext(ClassContext)
  function featchUrl(id) {
    axios({
      method: "GET",
      params: {
        id,
      },
      url:
        "https://www.fastmock.site/mock/495c605110d1f99250ee41b56e5bc267/demo01/test",
    })
      .then((res) => {
          dispatch({type:CLASS_TYPE,value:res.data.data})
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <div>Son1</div>
      <button onClick={() => featchUrl(2)}>change1</button>
      <button onClick={() => featchUrl(1)}>change2</button>
    </div>
  );
}
