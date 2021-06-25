import React, { useContext, useMemo } from "react";
import { ClassContext } from "./Class";
export default function Son2(params) {
  const { value } = useContext(ClassContext);
  console.log(value, 1);
  
    return useMemo(()=>{
        return ( <div>
            <div>Son1</div>
            {value?.map((item, index) => {
              return <div key={item + index}>{item.list}</div>;
            })}
          </div>)
    },[value])
}
