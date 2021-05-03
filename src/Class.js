import React, {  useReducer } from "react";

const ClassContext = React.createContext({});
const CLASS_TYPE = "CLASS_TYPE";
const reducer = (state, action) => {
  switch (action.type) {
    case action.type:
      return action.value;
    default:
      return state;
  }
};

export default function Class(params) {
    
  let classList = [
    { list: "类目1", code: "1" },
    { list: "类目2", code: "2" },
  ];
  const [value, dispatch] = useReducer(reducer, classList);

  return (
    <ClassContext.Provider value={{ value, dispatch }}>
      {params.children}
    </ClassContext.Provider>
  );
}

export { ClassContext, CLASS_TYPE };
