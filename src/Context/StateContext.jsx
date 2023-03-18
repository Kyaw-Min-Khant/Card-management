import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";

const StateContext=createContext();
export const StateContextProvider=({children})=>{
const [productList,setProductList]=useState([]);
    const [search, setSearch] = useState("");
useEffect(()=>{
    fetchData();
},[]);
useEffect(() => {
  dispatch({ type: "GET_PRODUCT", payload: productList });
  const filterProduct = productList.filter((item) =>
    item.title.toLowerCase().includes(search)
  );
  dispatch ({type: "GET_PRODUCT", payload: filterProduct})
}, [productList,search]);
const fetchData=async()=>{
 const fetchApiData=await fetch("https://fakestoreapi.com/products");
 const data=await fetchApiData.json();
 setProductList(data)
};
const initialState={
    products:[],
    card:[]
}

const [state,dispatch]=useReducer(reducer,initialState);
console.log(state);
const data={state,dispatch,search,setSearch}
    return(
    <StateContext.Provider value={data}>
{children}
    </StateContext.Provider>
    )
};
export const StateContextCustom=()=>useContext(StateContext)