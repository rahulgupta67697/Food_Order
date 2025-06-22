import Rescard from "./Rescard";

import { useState } from "react";

function Body()
{
    const restaurantData = [
  {
    photo: "download.avif",
    name: "The Kfc Restro",
    rating: 4.5,
    cuisines: ["Indian", "Chicken"],
    location: "Mumbai, India",
  },
  {
    photo: "burger.avif",
    name: "mcdonald House",
    rating: 4.7,
    cuisines: ["American", "Burgers"],
    location: "Mumbai, India",
  },
  {
    photo: "chole.avif",
    name: "Chole Bature Corner",
    rating: 4.2,
    cuisines: ["Italian", "Chole Bature "],
    location:  "Mumbai, India",
  },
  {
    photo: "cold.avif",
    name: "Drink Corner",
    rating: 4.0,
    cuisines: ["American", "Cold Coffe"],
    location:  "Mumbai, India",
  },
  {
    photo: "Panjabi.avif",
    name: "Panjabi Corner ",
    rating: 3.9,
    cuisines: ["Punjabi", "Punjabi Kofta"],
    location:  "Mumbai, India",
  },
  {
    photo: "Panner.avif",
    name: "Dragon Palace",
    rating: 4.6,
    cuisines: ["Chinese", "Panner Masala"],
    location:  "Mumbai, India",
  }
];
    const[listofRes,setlistofRes]=useState(restaurantData);
    const[inputName,setInputName]=useState("");
   

    return(
      
        <>
        <input type="text" placeholder="Search Here..." onChange={(e)=>
            setInputName(e.target.value)
        }/>
       <button id="btn" onClick={()=>
       {
        const filterData=restaurantData.filter((res)=>
        res.name.toLowerCase().includes(inputName.toLowerCase()))
        setlistofRes(filterData)
       }}
      >Search</button>
     <button className="btntop" onClick={()=>{
        const updateList=listofRes.filter((res)=>res.rating>4)
        setlistofRes(updateList)
     }}>Top Rated Button</button>
     <div className="container-1" >
        {
            
            listofRes.map((rescard)=>{
             return   <Rescard photo={rescard.photo} name={rescard.name} rating={rescard.rating}
             cuisines={rescard.cuisines} location={rescard.location}/>
            })
        }
        </div>
        
        </>
    )
}
export default Body;